// генерируем модалочку логина
class Modal {
  constructor() {
    this.modal = null;
    this.row = null;
    this.content = null;
    this.selectDoctor = null;
  }
  render() {
    this.createWrapper();
    this.createContent();
    this.createRow();
  }
  renderVisitModal() {
    this.createModalVisit();
    this.modalVisitContent();
    this.createSelect();
    this.createFormRow();
  }

  createWrapper() {
    this.modal = document.createElement("div");
    this.modal.id = "signin";
    this.modal.className = "modal signin";
    document.body.append(this.modal);
  }
  createContent() {
    this.content = document.createElement("div");
    this.content.className = "modal-content right-align";
    this.modal.append(this.content);
  }
  createRow() {
    this.row = document.createElement("ul");
    this.row.className = "row";
    this.modal.append(this.row);
    this.modal.append(enterError, enterSite);
  }
  addElement(array) {
    array.forEach((el) => {
      const form = new Form();
      const input = new Input(
        el.input.id,
        el.input.className,
        el.input.type,
        el.input.required
      );
      const label = new Label(el.label.title, el.label.attribute);
      const labelGet = label.get();
      const inputGet = input.get();
      const formGet = form.get();
      formGet.append(inputGet, labelGet);
      this.row.append(formGet);
    });
  }
  createModalVisit() {
    this.modal = document.createElement("div");
    this.modal.id = "create";
    this.modal.className = "modal modal-doctor";
    document.body.append(this.modal);
  }
  modalVisitContent() {
    this.content = document.createElement("div");
    this.content.className = "input-field choose-doctor";
    this.modal.append(this.content);
  }
  createSelect() {
    const selectDoctor = new Select();
    this.selectDoctor = selectDoctor.get();
    this.content.append(this.selectDoctor);
  }
  createFormRow() {
    this.row = document.createElement("ul");
    this.row.className = "row form-doctor";
    this.modal.append(this.row);
  }
}

class Label {
  constructor(title, attribute) {
    (this.label = null), (this.title = title), (this.attribute = attribute);
  }
  create() {
    this.label = document.createElement("label");
    this.label.setAttribute("for", this.attribute);
    this.label.innerHTML = this.title;
  }
  get() {
    this.create();
    return this.label;
  }
}
class Input {
  constructor(id, className, type, required) {
    (this.id = id),
      (this.className = className),
      (this.type = type),
      (this.required = required),
      (this.input = null);
  }
  create() {
    this.input = document.createElement("input");
    this.input.id = this.id;
    this.input.type = this.type;
    this.input.required = this.required;
    this.input.className = this.className;
  }

  get() {
    this.create();
    return this.input;
  }
}
const array = [
  {
    label: {
      title: "Email",
      attribute: "email",
    },
    input: {
      id: "email",
      className: "validate",
      type: "email",
      required: "required",
    },
  },
  {
    label: {
      title: "Password",
      attribute: "password",
    },
    input: {
      id: "password",
      className: "validate",
      type: "password",
      required: "required",
    },
  },
];

const enterError = document.createElement("span");
enterError.className = "enter-error left";

const enterSite = document.createElement("button");
enterSite.className = "waves-effect waves-light btn enter-btn right";
enterSite.href = "#";
enterSite.innerHTML = "Войти";

//По нажатию войти отправляем запрос и получаем токен или ошибку
enterSite.onclick = function () {
  fetch("https://ajax.test-danit.com/api/cards/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    }),
  })
    .then((response) => {
      if (response.status !== 200) {
        enterError.innerHTML = "Incorrect Login or Password";
        return "noid";
      } else {
        enterBtn.classList.remove("active");
        createBtn.classList.add("active");
        document.querySelector(".signin").M_Modal.close();

        return response.text();
      }
    })
    .then((data) => {
      localStorage.setItem("token", data);
    });
};

// Проверяем на наличие токена и отображаем или кнопку Вход или Создать
const token = localStorage.getItem("token");

if (token === "noid" || token == null) {
  enterBtn.classList.add("active");
  createBtn.classList.remove("active");
} else {
  enterBtn.classList.remove("active");
  createBtn.classList.add("active");
}
