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

  addElement(inputVisit) {
    inputVisit.forEach((el) => {
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

class Therapist extends Visit {
  constructor() {
    super();
    this.content = null;
  }
  get() {
    this.addElement(inputVisit);
    this.addAge(age);
    return this;
  }
  addAge(age) {
    age.forEach((el) => {
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
      const formGet = form.createFormVisit();
      formGet.append(inputGet, labelGet);
      document.querySelector(".form-doctor").append(formGet);
    });
  }
}

class Dentist extends Visit {
  constructor() {
    super();
    this.content = null;
  }

  get() {
    this.addElement(inputVisit);
    this.addLastVisit(lastvisit);
    return this;
  }
  addLastVisit(lastvisit) {
    lastvisit.forEach((el) => {
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
      const formGet = form.createFormVisit();
      formGet.append(inputGet, labelGet);
      document.querySelector(".form-doctor").append(formGet);
    });
  }
}
class Cardiologist extends Visit {
  constructor() {
    super();
    this.content = null;
  }

  get() {
    this.addElement(inputVisit);
    this.addInputCardiologist(cardiologist);
    return this;
  }
  addInputCardiologist() {
    cardiologist.forEach((el) => {
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
      const formGet = form.createFormVisit();
      formGet.append(inputGet, labelGet);
      document.querySelector(".form-doctor").append(formGet);
    });
  }
}
const cardiologist = [
  {
    label: {
      title: "Обычное давление",
      attribute: "pressure",
    },
    input: {
      id: "pressure",
      type: "text",
      required: "required",
    },
  },
  {
    label: {
      title: "Индекс массы тела",
      attribute: "bodymass",
    },
    input: {
      id: "bodymass",
      type: "text",
      required: "required",
    },
  },
  {
    label: {
      title: "Перенесенные заболевания сердечно-сосудистой",
      attribute: "cardiovascular",
    },
    input: {
      id: "cardiovascular",
      type: "text",
      required: "required",
    },
  },
  {
    label: {
      title: "Возраст",
      attribute: "age",
    },
    input: {
      id: "age",
      type: "text",
      required: "required",
    },
  },
];

const lastvisit = [
  {
    label: {
      title: "Дата последнего посещения",
      attribute: "lastvisit",
    },
    input: {
      id: "lastvisit",
      type: "text",
      required: "required",
    },
  },
];

const age = [
  {
    label: {
      title: "Возраст",
      attribute: "age",
    },
    input: {
      id: "age",
      type: "text",
      required: "required",
    },
  },
];

const inputVisit = [
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
  document.querySelector("#visitCreate").value = "choose-doctor";
};

function visitFunc() {
  const chooseDoctor = document.querySelector("#visitCreate").options[
    document.querySelector("#visitCreate").selectedIndex
  ].value;
  console.log(chooseDoctor);
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

//кнопка отправки на сервер
const formCreate = document.createElement("button");
formCreate.className =
  "btn waves-effect waves-light right create__btn formCreate";
formCreate.type = "submit";
formCreate.name = "action";
formCreate.innerHTML = "Создать";

//иконка в кнопке отправки на сервер
const formCreateI = document.createElement("i");
formCreateI.className = "material-icons right";
formCreateI.innerHTML = "send";
formCreate.append(formCreateI);

formCreate.onclick = function () {
  const doctorRequest = document.querySelector("#visitCreate").options[
    document.querySelector("#visitCreate").selectedIndex
  ].value;
  if (doctorRequest == "cardiologist") {
    sendRequest({
      doctor: "Кардиолог",
      purpose: document.querySelector("#purpose").value,
      description: document.querySelector("#description").value,
      urgency: document.querySelector(".selectUrgency").value,
      pressure: document.querySelector("#pressure").value,
      bodymass: document.querySelector("#bodymass").value,
      cardiovascular: document.querySelector("#cardiovascular").value,
      age: document.querySelector("#age").value,
      fullname: document.querySelector("#fullname").value,
    });
  }
  if (doctorRequest == "dentist") {
    sendRequest({
      doctor: "Стоматолог",
      purpose: document.querySelector("#purpose").value,
      description: document.querySelector("#description").value,
      urgency: document.querySelector(".selectUrgency").value,
      lastvisit: document.querySelector("#lastvisit").value,
      fullname: document.querySelector("#fullname").value,
    });
  }
  if (doctorRequest == "therapist") {
    sendRequest({
      doctor: "Терапевт",
      purpose: document.querySelector("#purpose").value,
      description: document.querySelector("#description").value,
      urgency: document.querySelector(".selectUrgency").value,
      age: document.querySelector("#age").value,
      fullname: document.querySelector("#fullname").value,
    });
  }
  document.querySelector(".form-doctor").innerHTML = "";
  document.querySelector(".select-wrapper").innerHTML = " ";

};

function sendRequest(body) {
  fetch("https://ajax.test-danit.com/api/cards", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 200) {
        // modalDoctor.M_Modal.close();
        const mainQ = document.querySelector(".search");
        mainQ.remove();
        renderCards();
        getcontent();
        return response.text();
      } else {
        alert("Что-то пошло не так");
      }
    })
    .then((data) => {
      console.log(data);
    });
}
//       if (inputPressure.value == 0) {
//         inputPressure.classList.add("invalid");
//         return false;
//       }

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

//   } else if (selectedDoctor === "dentist") {
//     if (document.contains(document.querySelector(".formPressure"))) {
//       document.querySelector(".formPressure").remove();
//     }

//     if (document.contains(document.querySelector(".formBodyMass"))) {
//       document.querySelector(".formBodyMass").remove();
//     }

//     if (document.contains(document.querySelector(".formCardiovascular"))) {
//       document.querySelector(".formCardiovascular").remove();
//     }

//     if (document.contains(document.querySelector(".formAge"))) {
//       document.querySelector(".formAge").remove();
//     }

//     if (document.contains(document.querySelector(".formLastVisit"))) {
//       document.querySelector(".formLastVisit").remove();
//     }
//     //последний визит
//     const formLastVisit = document.createElement("li");
//     formLastVisit.className = "input-field col s11 formLastVisit";
//     const inputLastVisit = document.createElement("input");
//     inputLastVisit.id = "lastvisit";
//     inputLastVisit.type = "text";
//     formLastVisit.append(inputLastVisit);
//     const labelLastVisit = document.createElement("label");
//     labelLastVisit.setAttribute("for", "lastvisit");
//     labelLastVisit.innerHTML = "Дата последнего посещения";
//     formLastVisit.append(labelLastVisit);
//     formUrgency.after(formLastVisit);

//     if (document.contains(document.querySelector(".formCreate"))) {
//       document.querySelector(".formCreate").remove();
//     }

//     //кнопка отправки на сервер
//     const formCreate = document.createElement("button");
//     formCreate.className =
//       "btn waves-effect waves-light right create__btn formCreate";
//     formCreate.type = "submit";
//     formCreate.name = "action";
//     formCreate.innerHTML = "Создать";

//     //иконка в кнопке отправки на сервер
//     const formCreateI = document.createElement("i");
//     formCreateI.className = "material-icons right";
//     formCreateI.innerHTML = "send";
//     formCreate.append(formCreateI);

//     formFullName.after(formCreate);

//     formCreate.onclick = function () {
//       if (inputPurpose.value == 0) {
//         inputPurpose.classList.add("invalid");
//         return false;
//       }

//       if (inputLastVisit.value == 0) {
//         inputLastVisit.classList.add("invalid");
//         return false;
//       }

//       if (inputFullName.value == 0) {
//         inputFullName.classList.add("invalid");
//         return false;
//       }

//       sendRequest({
//         doctor: "Стоматолог",
//         purpose: inputPurpose.value,
//         description: inputDescription.value,
//         urgency: selectUrgency.value,
//         lastvisit: inputLastVisit.value,
//         fullname: inputFullName.value,
//       });
//     };
//   } else if (selectedDoctor === "therapist") {
//     if (document.contains(document.querySelector(".formPressure"))) {
//       document.querySelector(".formPressure").remove();
//     }

//     if (document.contains(document.querySelector(".formBodyMass"))) {
//       document.querySelector(".formBodyMass").remove();
//     }

//     if (document.contains(document.querySelector(".formCardiovascular"))) {
//       document.querySelector(".formCardiovascular").remove();
//     }

//     if (document.contains(document.querySelector(".formLastVisit"))) {
//       document.querySelector(".formLastVisit").remove();
//     }

//     if (document.contains(document.querySelector(".formCreate"))) {
//       document.querySelector(".formCreate").remove();
//     }

//     if (document.contains(document.querySelector(".formAge"))) {
//       document.querySelector(".formAge").remove();
//     }
//     //возраст
//     const formAge = document.createElement("li");
//     formAge.className = "input-field col s11 formAge";
//     const inputAge = document.createElement("input");
//     inputAge.id = "age";
//     inputAge.type = "text";
//     formAge.append(inputAge);
//     const labelAge = document.createElement("label");
//     labelAge.setAttribute("for", "age");
//     labelAge.innerHTML = "Возраст";
//     formAge.append(labelAge);
//     formUrgency.after(formAge);

//     //кнопка отправки на сервер
//     const formCreate = document.createElement("button");
//     formCreate.className =
//       "btn waves-effect waves-light right create__btn formCreate";
//     formCreate.type = "submit";
//     formCreate.name = "action";
//     formCreate.innerHTML = "Создать";

//     //иконка в кнопке отправки на сервер
//     const formCreateI = document.createElement("i");
//     formCreateI.className = "material-icons right";
//     formCreateI.innerHTML = "send";
//     formCreate.append(formCreateI);

//     formFullName.after(formCreate);

//     formCreate.onclick = function () {
//       if (inputPurpose.value == 0) {
//         inputPurpose.classList.add("invalid");
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

//       sendRequest({
//         doctor: "Терапевт",
//         purpose: inputPurpose.value,
//         description: inputDescription.value,
//         urgency: selectUrgency.value,
//         age: inputAge.value,
//         fullname: inputFullName.value,
//       });
//     };
//   }
// }

// function sendRequest(body) {
//   fetch("https://ajax.test-danit.com/api/cards", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: JSON.stringify(body),
//   })
//     .then((response) => {
//       if (response.status === 200) {
//         modalDoctor.M_Modal.close();
//         const mainQ = document.querySelector(".search");
//         mainQ.remove();
//         renderCards();
//         getcontent();
//         return response.text();
//       } else {
//         alert("Что-то пошло не так");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
