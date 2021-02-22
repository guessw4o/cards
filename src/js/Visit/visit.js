//генерируем визит и отправляем на сервер
//модалка

class Visit {
  constructor() {
    this.content = null;
  }

  render() {
    this.addElement();
    return this.content;
  }

  addElement() {
    generalVisit.forEach((el) => {
      const form = new Form();
      const formGet = form.createFormVisit();
      const input = new Input(
        el.input.id,
        el.input.className,
        el.input.type,
        el.input.required
      );
      const label = new Label(el.label.title, el.label.attribute);
      const labelGet = label.get();
      const inputGet = input.get();
      formGet.append(inputGet, labelGet);
      document.querySelector(".form-doctor").append(formGet);
    });
    const select = new Select();
    document.querySelector(".form-doctor").append(select.render());
    return;
  }
}

const generalVisit = [
  {
    label: {
      title: "Цель визита",
      attribute: "purpose",
    },
    input: {
      id: "purpose",
      className: "purpose",
      type: "text",
      required: "required",
    },
  },
  {
    label: {
      title: "Краткое описание визита",
      attribute: "description",
    },
    input: {
      id: "description",
      type: "text",
      required: "required",
    },
  },
  {
    label: {
      title: "ФИО",
      attribute: "fullname",
    },
    input: {
      id: "fullname",
      type: "text",
      required: "required",
    },
  },
];

//кнопка закрыть
const formClose = document.createElement("a");
formClose.className =
  "waves-effect waves-light btn light-blue accent-3 create-close__btn modal-close";
formClose.innerHTML = "Закрыть";
formClose.onclick = function () {
  document.querySelector(".form-doctor").innerHTML = "";

  document.querySelector(".choose-doctor").innerHTML = "";
};

function visitFunc() {
  const chooseDoctor = document.querySelector("#visitCreate").options[
    document.querySelector("#visitCreate").selectedIndex
  ].value;

  const cardiologist = new Cardiologist();
  const dentist = new Dentist();
  const therapist = new Therapist();
  if (chooseDoctor === "choose-doctor") {
    document.querySelector(".form-doctor").innerHTML = "";
  }
  if (chooseDoctor === "cardiologist") {
    document.querySelector(".form-doctor").innerHTML = "";
    cardiologist.get();
    document.querySelector(".form-doctor").append(formClose, formCreate);
  } else if (chooseDoctor === "dentist") {
    document.querySelector(".form-doctor").innerHTML = "";
    dentist.get();
    document.querySelector(".form-doctor").append(formClose, formCreate);
  } else if (chooseDoctor === "therapist") {
    document.querySelector(".form-doctor").innerHTML = "";
    therapist.get();
    document.querySelector(".form-doctor").append(formClose, formCreate);
  }
}



//       if (inputBodyMass.value == 0) {
//         inputBodyMass.classList.add("invalid");
//         return false;
//       }

//       if (inputCardiovascular.value == 0) {
//         inputCardiovascular.classList.add("invalid");
//         return false;
//       }

//       if (inputAge.value == 0) {
//         inputAge.classList.add("invalid");
//         return false;
//       }

//       if (inputFullName.value == 0) {
//         inputFullName.classList.add("invalid");
//         return false;
//       }
