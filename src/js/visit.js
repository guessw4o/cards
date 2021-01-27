//генерируем визит и отправляем на сервер
//модалка
const modalDoctor = document.createElement("div")
modalDoctor.id = "create"
modalDoctor.className = "modal modal-doctor"

document.body.append(modalDoctor)

//выбор доктора
const chooseDoctor = document.createElement("div")
chooseDoctor.className = "input-field choose-doctor"

const visitCreate = document.createElement("select")
visitCreate.id = "visitCreate"
visitCreate.onchange = visitFunc;

// const selectDoctor = document.createElement("option")
// selectDoctor.value = ""
// selectDoctor.innerHTML = "Выбор специалиста"

const selectCardiologist = document.createElement("option")
selectCardiologist.value = "cardiologist"
selectCardiologist.innerHTML = "Кардиолог"

const selectDentist = document.createElement("option")
selectDentist.value = "dentist"
selectDentist.innerHTML = "Стоматолог"

const selectTherapist = document.createElement("option")
selectTherapist.value = "therapist"
selectTherapist.innerHTML = "Терапевт"

visitCreate.append(selectCardiologist, selectDentist, selectTherapist)
chooseDoctor.append(visitCreate)
modalDoctor.append(chooseDoctor)

//форма
const formDoctor = document.createElement('ul')
formDoctor.className = "row form-doctor";

//забаганый селект материалайза
function formItemUrgency () {
    const li = document.createElement("li")
    li.className = "input-field col s11 formUrgency"
    const select = document.createElement("select")
    select.className = "selectUrgency"
    
    const lowUrgency = document.createElement("option")
    lowUrgency.value = "Обычная"
    lowUrgency.innerHTML = "Обычная"
    
    const normalUrgency = document.createElement("option")
    normalUrgency.value = "Приоритетная"
    normalUrgency.innerHTML = "Приоритетная"
    
    const highUrgency = document.createElement("option")
    highUrgency.value = "Неотложная"
    highUrgency.innerHTML = "Неотложная"
    
    select.append(lowUrgency, normalUrgency, highUrgency)
    li.append(select)
    return [li, select]
}

const [formUrgency, selectUrgency] = formItemUrgency()

// const optionUrgency = document.createElement("option")
// optionUrgency.value = ""
// optionUrgency.innerHTML = "Срочность"

//цель визита
const formPurpose = document.createElement("li")
formPurpose.className = "input-field col s11 formPurpose"
const inputPurpose = document.createElement("input")
inputPurpose.id = "purpose"
inputPurpose.type = "text"
formPurpose.append(inputPurpose)
const labelPurpose = document.createElement("label")
labelPurpose.setAttribute("for", "purpose");
labelPurpose.innerHTML = "Цель визита"
formPurpose.append(labelPurpose)


//краткое описание визита
const formDescription = document.createElement("li")
formDescription.className = "input-field col s11 formDescription"
const inputDescription = document.createElement("input")
inputDescription.id = "description"
inputDescription.type = "text"
formDescription.append(inputDescription)
const labelDescription = document.createElement("label")
labelDescription.setAttribute("for", "description");
labelDescription.innerHTML = "Краткое описание визита"
formDescription.append(labelDescription)

//обычное давление
const formPressure = document.createElement("li")
formPressure.className = "input-field col s11 formPressure"
const inputPressure = document.createElement("input")
inputPressure.id = "pressure"
inputPressure.type = "text"
formPressure.append(inputPressure)
const labelPressure = document.createElement("label")
labelPressure.setAttribute("for", "pressure");
labelPressure.innerHTML = "Обычное давление"
formPressure.append(labelPressure)

//индекс массы тела
const formBodyMass = document.createElement("li")
formBodyMass.className = "input-field col s11 formBodyMass"
const inputBodyMass = document.createElement("input")
inputBodyMass.id = "bodymass"
inputBodyMass.type = "text"
formBodyMass.append(inputBodyMass)
const labelBodyMass = document.createElement("label")
labelBodyMass.setAttribute("for", "bodymass");
labelBodyMass.innerHTML = "Индекс массы тела"
formBodyMass.append(labelBodyMass)

//Перенесенные заболевания сердечно-сосудистой
const formCardiovascular = document.createElement("li")
formCardiovascular.className = "input-field col s11 formCardiovascular"
const inputCardiovascular = document.createElement("input")
inputCardiovascular.id = "cardiovascular"
inputCardiovascular.type = "text"
formCardiovascular.append(inputCardiovascular)
const labelCardiovascular = document.createElement("label")
labelCardiovascular.setAttribute("for", "cardiovascular");
labelCardiovascular.innerHTML = "Перенесенные заболевания сердечно-сосудистой"
formCardiovascular.append(labelCardiovascular)

//возраст
const formAge = document.createElement("li")
formAge.className = "input-field col s11 formAge"
const inputAge = document.createElement("input")
inputAge.id = "age"
inputAge.type = "text"
formAge.append(inputAge)
const labelAge = document.createElement("label")
labelAge.setAttribute("for", "age");
labelAge.innerHTML = "Возраст"
formAge.append(labelAge)

//последний визит
const formLastVisit = document.createElement("li")
formLastVisit.className = "input-field col s11 formLastVisit"
const inputLastVisit = document.createElement("input")
inputLastVisit.id = "lastvisit"
inputLastVisit.type = "text"
formLastVisit.append(inputLastVisit)
const labelLastVisit = document.createElement("label")
labelLastVisit.setAttribute("for", "lastvisit");
labelLastVisit.innerHTML = "Дата последнего посещения"
formLastVisit.append(labelLastVisit)

//фио
const formFullName = document.createElement("li")
formFullName.className = "input-field col s11 formFullName"
const inputFullName = document.createElement("input")
inputFullName.id = "fullname"
inputFullName.type = "text"
formFullName.append(inputFullName)
const labelFullName = document.createElement("label")
labelFullName.setAttribute("for", "fullname");
labelFullName.innerHTML = "ФИО"
formFullName.append(labelFullName)

//кнопка закрыть
const formClose = document.createElement("a")
formClose.className = "waves-effect waves-light btn light-blue accent-3 create-close__btn modal-close"
formClose.innerHTML = "Закрыть"


formDoctor.append(formPurpose, formDescription, formUrgency, formPressure, formBodyMass, formCardiovascular, formAge, formFullName, formClose)
modalDoctor.append(formDoctor)

visitFunc();

function visitFunc() {
    console.log('formUrgency', formUrgency)
    console.log('formDoctor', formDoctor)
    const selectedDoctor = visitCreate.options[visitCreate.selectedIndex].value;
    
    if (selectedDoctor === "cardiologist") {
        
        if (document.contains(document.querySelector(".formLastVisit"))) {
            document.querySelector(".formLastVisit").remove();
        }
        
        if (document.contains(document.querySelector(".formAge"))) {
            document.querySelector(".formAge").remove();
        }
        
        //возраст
        const formAge = document.createElement("li")
        formAge.className = "input-field col s11 formAge"
        const inputAge = document.createElement("input")
        inputAge.id = "age"
        inputAge.type = "text"
        formAge.append(inputAge)
        const labelAge = document.createElement("label")
        labelAge.setAttribute("for", "age");
        labelAge.innerHTML = "Возраст"
        formAge.append(labelAge)
        formUrgency.after(formAge)
        
        if (document.contains(document.querySelector(".formCardiovascular"))) {
            document.querySelector(".formCardiovascular").remove();
        }
        //Перенесенные заболевания сердечно-сосудистой
        const formCardiovascular = document.createElement("li")
        formCardiovascular.className = "input-field col s11 formCardiovascular"
        const inputCardiovascular = document.createElement("input")
        inputCardiovascular.id = "cardiovascular"
        inputCardiovascular.type = "text"
        formCardiovascular.append(inputCardiovascular)
        const labelCardiovascular = document.createElement("label")
        labelCardiovascular.setAttribute("for", "cardiovascular");
        labelCardiovascular.innerHTML = "Перенесенные заболевания сердечно-сосудистой"
        formCardiovascular.append(labelCardiovascular)
        formUrgency.after(formCardiovascular)
        
        
        if (document.contains(document.querySelector(".formBodyMass"))) {
            document.querySelector(".formBodyMass").remove();
        }
        //индекс массы тела
        const formBodyMass = document.createElement("li")
        formBodyMass.className = "input-field col s11 formBodyMass"
        const inputBodyMass = document.createElement("input")
        inputBodyMass.id = "bodymass"
        inputBodyMass.type = "text"
        formBodyMass.append(inputBodyMass)
        const labelBodyMass = document.createElement("label")
        labelBodyMass.setAttribute("for", "bodymass");
        labelBodyMass.innerHTML = "Индекс массы тела"
        formBodyMass.append(labelBodyMass)
        formUrgency.after(formBodyMass)
        
        
        if (document.contains(document.querySelector(".formPressure"))) {
            document.querySelector(".formPressure").remove();
        }
        //обычное давление
        const formPressure = document.createElement("li")
        formPressure.className = "input-field col s11 formPressure"
        const inputPressure = document.createElement("input")
        inputPressure.id = "pressure"
        inputPressure.type = "text"
        formPressure.append(inputPressure)
        const labelPressure = document.createElement("label")
        labelPressure.setAttribute("for", "pressure");
        labelPressure.innerHTML = "Обычное давление"
        formPressure.append(labelPressure)
        formUrgency.after(formPressure)
        
        
        if (document.contains(document.querySelector(".formCreate"))) {
            document.querySelector(".formCreate").remove();
        }
        
        //кнопка отправки на сервер
        const formCreate = document.createElement("button")
        formCreate.className = "btn waves-effect waves-light right create__btn formCreate"
        formCreate.type = "submit"
        formCreate.name = "action"
        formCreate.innerHTML = "Создать"
        
        //иконка в кнопке отправки на сервер
        const formCreateI = document.createElement("i")
        formCreateI.className = "material-icons right"
        formCreateI.innerHTML = "send"
        formCreate.append(formCreateI)
        
        formFullName.after(formCreate)
        
        formCreate.onclick = function () {
            if (!inputPurpose.value) {
                inputPurpose.classList.add("invalid");
                return false
            }

            if (inputPressure.value == 0) {
                inputPressure.classList.add("invalid");
                return false
            }

            if (inputBodyMass.value == 0) {
                inputBodyMass.classList.add("invalid");
                return false
            }

            if (inputCardiovascular.value == 0) {
                inputCardiovascular.classList.add("invalid");
                return false
            }

            if (inputAge.value == 0) {
                inputAge.classList.add("invalid");
                return false
            }

            if (inputFullName.value == 0) {
                inputFullName.classList.add("invalid");
                return false
            }
    
            sendRequest({
                "doctor": "Кардиолог",
                "purpose": inputPurpose.value,
                "description": inputDescription.value,
                "urgency": selectUrgency.value,
                "pressure": inputPressure.value,
                "bodymass": inputBodyMass.value,
                "cardiovascular": inputCardiovascular.value,
                "age": inputAge.value,
                "fullname": inputFullName.value
            })
        }
        
    } else if (selectedDoctor === "dentist") {
        
        if (document.contains(document.querySelector(".formPressure"))) {
            document.querySelector(".formPressure").remove();
        }
        
        if (document.contains(document.querySelector(".formBodyMass"))) {
            document.querySelector(".formBodyMass").remove();
        }
        
        if (document.contains(document.querySelector(".formCardiovascular"))) {
            document.querySelector(".formCardiovascular").remove();
        }
        
        if (document.contains(document.querySelector(".formAge"))) {
            document.querySelector(".formAge").remove();
        }
        
        if (document.contains(document.querySelector(".formLastVisit"))) {
            document.querySelector(".formLastVisit").remove();
        }
        //последний визит
        const formLastVisit = document.createElement("li")
        formLastVisit.className = "input-field col s11 formLastVisit"
        const inputLastVisit = document.createElement("input")
        inputLastVisit.id = "lastvisit"
        inputLastVisit.type = "text"
        formLastVisit.append(inputLastVisit)
        const labelLastVisit = document.createElement("label")
        labelLastVisit.setAttribute("for", "lastvisit");
        labelLastVisit.innerHTML = "Дата последнего посещения"
        formLastVisit.append(labelLastVisit)
        formUrgency.after(formLastVisit)

        if (document.contains(document.querySelector(".formCreate"))) {
            document.querySelector(".formCreate").remove();
        }
        
        //кнопка отправки на сервер
        const formCreate = document.createElement("button")
        formCreate.className = "btn waves-effect waves-light right create__btn formCreate"
        formCreate.type = "submit"
        formCreate.name = "action"
        formCreate.innerHTML = "Создать"
        
        //иконка в кнопке отправки на сервер
        const formCreateI = document.createElement("i")
        formCreateI.className = "material-icons right"
        formCreateI.innerHTML = "send"
        formCreate.append(formCreateI)
        
        formFullName.after(formCreate)
        
        formCreate.onclick = function () {
            if (inputPurpose.value == 0) {
                inputPurpose.classList.add("invalid");
                return false
            }

            if (inputLastVisit.value == 0) {
                inputLastVisit.classList.add("invalid");
                return false
            }

            if (inputFullName.value == 0) {
                inputFullName.classList.add("invalid");
                return false
            }
            
            sendRequest({
                "doctor": "Стоматолог",
                "purpose": inputPurpose.value,
                "description": inputDescription.value,
                "urgency": selectUrgency.value,
                "lastvisit": inputLastVisit.value,
                "fullname": inputFullName.value
            })
        }
        
    } else if (selectedDoctor === "therapist") {
        
        if (document.contains(document.querySelector(".formPressure"))) {
            document.querySelector(".formPressure").remove();
        }
        
        if (document.contains(document.querySelector(".formBodyMass"))) {
            document.querySelector(".formBodyMass").remove();
        }
        
        if (document.contains(document.querySelector(".formCardiovascular"))) {
            document.querySelector(".formCardiovascular").remove();
        }
        
        if (document.contains(document.querySelector(".formLastVisit"))) {
            document.querySelector(".formLastVisit").remove();
        }
        
        if (document.contains(document.querySelector(".formCreate"))) {
            document.querySelector(".formCreate").remove();
        }
        
        if (document.contains(document.querySelector(".formAge"))) {
            document.querySelector(".formAge").remove();
        }
        //возраст
        const formAge = document.createElement("li")
        formAge.className = "input-field col s11 formAge"
        const inputAge = document.createElement("input")
        inputAge.id = "age"
        inputAge.type = "text"
        formAge.append(inputAge)
        const labelAge = document.createElement("label")
        labelAge.setAttribute("for", "age");
        labelAge.innerHTML = "Возраст"
        formAge.append(labelAge)
        formUrgency.after(formAge)
        
        
        //кнопка отправки на сервер
        const formCreate = document.createElement("button")
        formCreate.className = "btn waves-effect waves-light right create__btn formCreate"
        formCreate.type = "submit"
        formCreate.name = "action"
        formCreate.innerHTML = "Создать"
        
        //иконка в кнопке отправки на сервер
        const formCreateI = document.createElement("i")
        formCreateI.className = "material-icons right"
        formCreateI.innerHTML = "send"
        formCreate.append(formCreateI)
        
        formFullName.after(formCreate)
        
        formCreate.onclick = function () {
            if (inputPurpose.value == 0) {
                inputPurpose.classList.add("invalid");
                return false
            }

            if (inputAge.value == 0) {
                inputAge.classList.add("invalid");
                return false
            }

            if (inputFullName.value == 0) {
                inputFullName.classList.add("invalid");
                return false
            }
    
            sendRequest({
                doctor: "Терапевт",
                purpose: inputPurpose.value,
                description: inputDescription.value,
                urgency: selectUrgency.value,
                age: inputAge.value,
                fullname: inputFullName.value
            })
        }
        
    }
}

function sendRequest (body) {
    fetch("https://ajax.test-danit.com/api/cards", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(body)
    })
        .then((response) => {
            if (response.status === 200) {
                modalDoctor.M_Modal.close()
                const rowCardQ = document.querySelector(".rowCard")
                rowCardQ.remove()
                const noItemsQ = document.querySelector(".no-items")
                noItemsQ.remove()
                renderCards()
                getcontent()
                return response.text()
            } else {
                alert("Что-то пошло не так")
            }
        })
        .then((data) => {
            console.log(data)
        })
}
