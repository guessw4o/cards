//кнопка отправки на сервер
const formCreate = document.createElement("button");
formCreate.className =
  "btn waves-effect waves-light right create__btn formCreate modal-close";
formCreate.type = "submit";
formCreate.name = "action";
formCreate.innerHTML = "Создать";

//иконка в кнопке отправки на сервер
const formCreateI = document.createElement("i");
formCreateI.className = "material-icons right";
formCreateI.innerHTML = "send";
formCreate.append(formCreateI);
const contentCards = document.createElement("div");
contentCards.className = "card-content white-text left-align";
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
  } else if (doctorRequest === "dentist") {
    sendRequest({
      doctor: "Стоматолог",
      purpose: document.querySelector("#purpose").value,
      description: document.querySelector("#description").value,
      urgency: document.querySelector(".selectUrgency").value,
      lastvisit: document.querySelector("#lastvisit").value,
      fullname: document.querySelector("#fullname").value,
    });
  } else if (doctorRequest === "therapist") {
    sendRequest({
      doctor: "Терапевт",
      purpose: document.querySelector("#purpose").value,
      description: document.querySelector("#description").value,
      urgency: document.querySelector(".selectUrgency").value,
      age: document.querySelector("#age").value,
      fullname: document.querySelector("#fullname").value,
    });
  }
  document.getElementsByTagName("select").innerHTML = "";
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
