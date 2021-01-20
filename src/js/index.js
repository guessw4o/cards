document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

const required = true
const patientPurpose = { name: 'purpose', label: 'Цель визита', required }
const patientDescription = { name: 'description', label: 'Краткое описание визита' }
//срочность добавить
const patientPressure = { name: 'pressure', label: 'Обычное давление', required }
const patientBodyMass = { name: 'body-mass', label: 'Индекс массы тела', required }
const patientCardiovascular = { name: 'cardiovascular', label: 'Перенесенные заболевания сердечно-сосудистой', required }
const patientLastVisit = { name: 'last-visit', label: 'Дата последнего посещения', required }
const patientAge = { name: 'age', label: 'Возраст', required }
const patientFullName = { name: 'full-name', label: 'ФИО', required }

const formFieldsByType = {
    cardiologist: [
        patientPurpose,
        patientDescription,
        patientPressure,
        patientBodyMass,
        patientCardiovascular,
        patientAge,
        patientFullName,
    ],
    dentist: [
        patientPurpose,
        patientDescription,
        patientLastVisit,
        patientFullName,
    ],
    therapist: [
        patientPurpose,
        patientDescription,
        patientAge,
        patientFullName,
    ],
}

function handleDoctor(e) {
    console.log(e.target)
    const { value } = e.target
    const formFields = formFieldsByType[value]
    formFields.forEach(({ name, label, required }) => {
        console.log(name)
    })
}