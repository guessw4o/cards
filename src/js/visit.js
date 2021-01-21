//генерируем визит и отправляем на сервер
function visitFunc() {
    const visitCreate = document.getElementById("visitCreate");
    const selectedDoctor = visitCreate.options[visitCreate.selectedIndex].value;
    
    const modalDoctor = document.querySelector(".modal-doctor")
    
    if (selectedDoctor === "cardiologist") {
        
        if (document.contains(document.querySelector(".form-doctor"))) {
            document.querySelector(".form-doctor").remove();
        }
        
        const formDoctor = document.createElement('ul')
        formDoctor.className = "row form-doctor";
        modalDoctor.append(formDoctor)
        
        const formPurpose = document.createElement("li")
        formPurpose.className = "input-field col s11"
        const inputPurpose = document.createElement("input")
        inputPurpose.id = "purpose"
        inputPurpose.type = "text"
        formPurpose.append(inputPurpose)
        const labelPurpose = document.createElement("label")
        labelPurpose.setAttribute("for", "purpose");
        labelPurpose.innerHTML = "Цель визита"
        formPurpose.append(labelPurpose)
        
        const formDescription = document.createElement("li")
        formDescription.className = "input-field col s11"
        const inputDescription = document.createElement("input")
        inputDescription.id = "description"
        inputDescription.type = "text"
        formDescription.append(inputDescription)
        const labelDescription = document.createElement("label")
        labelDescription.setAttribute("for", "description");
        labelDescription.innerHTML = "Краткое описание визита"
        formDescription.append(labelDescription)
        
        const formUrgency = document.querySelector(".formUrgency")
        // const formUrgency = document.createElement("li")
        // formUrgency.className = "input-field col s11"
        // const selectUrgency = document.createElement("select")
        // selectUrgency.className = "tests"
        // formUrgency.append(selectUrgency)
        // const optionUrgency = document.createElement("option")
        // optionUrgency.value = ""
        // optionUrgency.innerHTML = "Срочность"
        // const lowUrgency = document.createElement("option")
        // lowUrgency.value = "low"
        // lowUrgency.innerHTML = "Обычная"
        // const normalUrgency = document.createElement("option")
        // normalUrgency.value = "normal"
        // normalUrgency.innerHTML = "Приоритетная"
        // const highUrgency = document.createElement("option")
        // highUrgency.value = "high"
        // highUrgency.innerHTML = "Неотложная"
        // selectUrgency.append(optionUrgency, lowUrgency, normalUrgency, highUrgency)
        
        const formPressure = document.createElement("li")
        formPressure.className = "input-field col s11"
        const inputPressure = document.createElement("input")
        inputPressure.id = "pressure"
        inputPressure.type = "text"
        formPressure.append(inputPressure)
        const labelPressure = document.createElement("label")
        labelPressure.setAttribute("for", "pressure");
        labelPressure.innerHTML = "Обычное давление"
        formPressure.append(labelPressure)
        
        const formBodyMass = document.createElement("li")
        formBodyMass.className = "input-field col s11"
        const inputBodyMass = document.createElement("input")
        inputBodyMass.id = "bodymass"
        inputBodyMass.type = "text"
        formBodyMass.append(inputBodyMass)
        const labelBodyMass = document.createElement("label")
        labelBodyMass.setAttribute("for", "bodymass");
        labelBodyMass.innerHTML = "Индекс массы тела"
        formBodyMass.append(labelBodyMass)
        
        const formCardiovascular = document.createElement("li")
        formCardiovascular.className = "input-field col s11"
        const inputCardiovascular = document.createElement("input")
        inputCardiovascular.id = "cardiovascular"
        inputCardiovascular.type = "text"
        formCardiovascular.append(inputCardiovascular)
        const labelCardiovascular = document.createElement("label")
        labelCardiovascular.setAttribute("for", "cardiovascular");
        labelCardiovascular.innerHTML = "Перенесенные заболевания сердечно-сосудистой"
        formCardiovascular.append(labelCardiovascular)
        
        const formAge = document.createElement("li")
        formAge.className = "input-field col s11"
        const inputAge = document.createElement("input")
        inputAge.id = "age"
        inputAge.type = "text"
        formAge.append(inputAge)
        const labelAge = document.createElement("label")
        labelAge.setAttribute("for", "age");
        labelAge.innerHTML = "Возраст"
        formAge.append(labelAge)
        
        const formFullName = document.createElement("li")
        formFullName.className = "input-field col s11"
        const inputFullName = document.createElement("input")
        inputFullName.id = "fullname"
        inputFullName.type = "text"
        formFullName.append(inputFullName)
        const labelFullName = document.createElement("label")
        labelFullName.setAttribute("for", "age");
        labelFullName.innerHTML = "ФИО"
        formFullName.append(labelFullName)
        
        const formClose = document.createElement("a")
        formClose.className = "waves-effect waves-light btn light-blue accent-3 create-close__btn modal-close"
        formClose.innerHTML = "Закрыть"
        
        const formCreate = document.createElement("button")
        formCreate.className = "btn waves-effect waves-light right create__btn"
        formCreate.type = "submit"
        formCreate.name = "action"
        formCreate.innerHTML = "Создать"
        
        const formCreateI = document.createElement("i")
        formCreateI.className = "material-icons right"
        formCreateI.innerHTML = "send"
        formCreate.append(formCreateI)
        
        formDoctor.append(formPurpose, formDescription, formUrgency, formPressure, formBodyMass, formCardiovascular, formAge, formFullName, formClose, formCreate)
        
    } else if (selectedDoctor === "dentist") {
    
        if (document.contains(document.querySelector(".form-doctor"))) {
            document.querySelector(".form-doctor").remove();
        }
        
        const formDoctor = document.createElement('ul')
        formDoctor.className = "row form-doctor";
        modalDoctor.append(formDoctor)
        
        const formPurpose = document.createElement("li")
        formPurpose.className = "input-field col s11"
        const inputPurpose = document.createElement("input")
        inputPurpose.id = "purpose"
        inputPurpose.type = "text"
        formPurpose.append(inputPurpose)
        const labelPurpose = document.createElement("label")
        labelPurpose.setAttribute("for", "purpose");
        labelPurpose.innerHTML = "Цель визита"
        formPurpose.append(labelPurpose)
        
        const formDescription = document.createElement("li")
        formDescription.className = "input-field col s11"
        const inputDescription = document.createElement("input")
        inputDescription.id = "description"
        inputDescription.type = "text"
        formDescription.append(inputDescription)
        const labelDescription = document.createElement("label")
        labelDescription.setAttribute("for", "description");
        labelDescription.innerHTML = "Краткое описание визита"
        formDescription.append(labelDescription)
        
        const formUrgency = document.querySelector(".formUrgency")
        
        const formLastVisit = document.createElement("li")
        formLastVisit.className = "input-field col s11"
        const inputLastVisit = document.createElement("input")
        inputLastVisit.id = "lastvisit"
        inputLastVisit.type = "text"
        formLastVisit.append(inputLastVisit)
        const labelLastVisit = document.createElement("label")
        labelLastVisit.setAttribute("for", "age");
        labelLastVisit.innerHTML = "Дата последнего посещения"
        formLastVisit.append(labelLastVisit)
        
        const formFullName = document.createElement("li")
        formFullName.className = "input-field col s11"
        const inputFullName = document.createElement("input")
        inputFullName.id = "fullname"
        inputFullName.type = "text"
        formFullName.append(inputFullName)
        const labelFullName = document.createElement("label")
        labelFullName.setAttribute("for", "age");
        labelFullName.innerHTML = "ФИО"
        formFullName.append(labelFullName)
        
        const formClose = document.createElement("a")
        formClose.className = "waves-effect waves-light btn light-blue accent-3 create-close__btn modal-close"
        formClose.innerHTML = "Закрыть"
        
        const formCreate = document.createElement("button")
        formCreate.className = "btn waves-effect waves-light right create__btn"
        formCreate.type = "submit"
        formCreate.name = "action"
        formCreate.innerHTML = "Создать"
        
        const formCreateI = document.createElement("i")
        formCreateI.className = "material-icons right"
        formCreateI.innerHTML = "send"
        formCreate.append(formCreateI)
        
        formDoctor.append(formPurpose, formDescription, formUrgency, formLastVisit, formFullName, formClose, formCreate)
        
        
    } else if (selectedDoctor === "therapist") {
    
        if (document.contains(document.querySelector(".form-doctor"))) {
            document.querySelector(".form-doctor").remove();
        }
    
        const formDoctor = document.createElement('ul')
        formDoctor.className = "row form-doctor";
        modalDoctor.append(formDoctor)
    
        const formPurpose = document.createElement("li")
        formPurpose.className = "input-field col s11"
        const inputPurpose = document.createElement("input")
        inputPurpose.id = "purpose"
        inputPurpose.type = "text"
        formPurpose.append(inputPurpose)
        const labelPurpose = document.createElement("label")
        labelPurpose.setAttribute("for", "purpose");
        labelPurpose.innerHTML = "Цель визита"
        formPurpose.append(labelPurpose)
    
        const formDescription = document.createElement("li")
        formDescription.className = "input-field col s11"
        const inputDescription = document.createElement("input")
        inputDescription.id = "description"
        inputDescription.type = "text"
        formDescription.append(inputDescription)
        const labelDescription = document.createElement("label")
        labelDescription.setAttribute("for", "description");
        labelDescription.innerHTML = "Краткое описание визита"
        formDescription.append(labelDescription)
    
        const formUrgency = document.querySelector(".formUrgency")
    
        const formAge = document.createElement("li")
        formAge.className = "input-field col s11"
        const inputAge = document.createElement("input")
        inputAge.id = "age"
        inputAge.type = "text"
        formAge.append(inputAge)
        const labelAge = document.createElement("label")
        labelAge.setAttribute("for", "age");
        labelAge.innerHTML = "Возраст"
        formAge.append(labelAge)
    
        const formFullName = document.createElement("li")
        formFullName.className = "input-field col s11"
        const inputFullName = document.createElement("input")
        inputFullName.id = "fullname"
        inputFullName.type = "text"
        formFullName.append(inputFullName)
        const labelFullName = document.createElement("label")
        labelFullName.setAttribute("for", "age");
        labelFullName.innerHTML = "ФИО"
        formFullName.append(labelFullName)
    
        const formClose = document.createElement("a")
        formClose.className = "waves-effect waves-light btn light-blue accent-3 create-close__btn modal-close"
        formClose.innerHTML = "Закрыть"
    
        const formCreate = document.createElement("button")
        formCreate.className = "btn waves-effect waves-light right create__btn"
        formCreate.type = "submit"
        formCreate.name = "action"
        formCreate.innerHTML = "Создать"
    
        const formCreateI = document.createElement("i")
        formCreateI.className = "material-icons right"
        formCreateI.innerHTML = "send"
        formCreate.append(formCreateI)
    
        formDoctor.append(formPurpose, formDescription, formUrgency, formAge, formFullName, formClose, formCreate)
    }
}


// const required = true
// const patientPurpose = { name: 'purpose', label: 'Цель визита', required }
// const patientDescription = { name: 'description', label: 'Краткое описание визита' }
// //срочность добавить
// const patientPressure = { name: 'pressure', label: 'Обычное давление', required }
// const patientBodyMass = { name: 'body-mass', label: 'Индекс массы тела', required }
// const patientCardiovascular = {
//     name: 'cardiovascular',
//     label: 'Перенесенные заболевания сердечно-сосудистой',
//     required
// }
// const patientLastVisit = { name: 'last-visit', label: 'Дата последнего посещения', required }
// const patientAge = { name: 'age', label: 'Возраст', required }
// const patientFullName = { name: 'full-name', label: 'ФИО', required }
//
// const formFieldsByType = {
//     cardiologist: [
//         patientPurpose,
//         patientDescription,
//         patientPressure,
//         patientBodyMass,
//         patientCardiovascular,
//         patientAge,
//         patientFullName,
//     ],
//     dentist: [
//         patientPurpose,
//         patientDescription,
//         patientLastVisit,
//         patientFullName,
//     ],
//     therapist: [
//         patientPurpose,
//         patientDescription,
//         patientAge,
//         patientFullName,
//     ],
// }
//
// // console.log(formFieldsByType)
//
//
// function handleDoctor(e) {
//     const { value } = e.target.name
//     const formFields = formFieldsByType[value]
//
//     console.log(formFields)
//     formFields.forEach(({ name, label, required }) => {
//         console.log(name)
//     })
// }