function renderCards() {
    const main = document.querySelector(".search")
    
    const noItems = document.createElement("div")
    noItems.innerHTML = "No items have been added"
    noItems.className = "no-items"
    
    const rowCard = document.createElement("div")
    rowCard.className = "rowCard"
    main.append(noItems, rowCard)
}

renderCards()

function getcontent(noItems) {
    fetch("https://ajax.test-danit.com/api/cards", {
        method: "get",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach((info) => {
    
                function noitems() {
                    if (data.length > 0) {
                        const noItemsQ = document.querySelector(".no-items")
                        noItemsQ.classList.add("hide")
            
                    } else {
                        const noItemsQ = document.querySelector(".no-items")
                        noItemsQ.classList.remove("hide")
                    }
                }
    
                noitems()
                
                const rowCardC = document.querySelector(".rowCard")
                
                const colCards = document.createElement("div")
                colCards.className = "col m4 colcards"
                rowCardC.append(colCards)
                
                const greyCards = document.createElement("div")
                greyCards.className = "card blue-grey darken-1"
                colCards.append(greyCards)
                
                const contentCards = document.createElement("div")
                contentCards.className = "card-content white-text left-align"
                
                const deleteCards = document.createElement("a")
                deleteCards.className = "right"
                deleteCards.style.cursor = "pointer"
                deleteCards.style.color = "#ffffff"
                deleteCards.innerHTML = "X"
                
                deleteCards.onclick = function () {
                    fetch(`https://ajax.test-danit.com/api/cards/${info.id}`, {
                        method: "delete",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        },
                    })
                    colCards.remove()
                }
                
                const cardAction = document.createElement("div")
                cardAction.className = "card-action"
                greyCards.append(contentCards, cardAction)
                
                const loadMore = document.createElement("a")
                loadMore.innerHTML = "Показать больше"
                loadMore.style.cursor = "pointer"
                
                loadMore.onclick = function () {
                    divHide.classList.remove("hide")
                    loadMore.classList.add("hide")
                    
                    if (`${info.content.doctor}` === "Кардиолог") {
                        pLastVisit.remove()
                    } else if (`${info.content.doctor}` === "Стоматолог") {
                        pPressure.remove()
                        pBodyMass.remove()
                        pCardiovascular.remove()
                        pAge.remove()
                    } else if (`${info.content.doctor}` === "Терапевт") {
                        pPressure.remove()
                        pBodyMass.remove()
                        pCardiovascular.remove()
                        pLastVisit.remove()
                    }
                    
                }
                
                const editCard = document.createElement("a")
                editCard.innerHTML = "Редактировать"
                editCard.style.cursor = "pointer"
                cardAction.append(loadMore, editCard)
                
                editCard.onclick = function () {
                    divHide.classList.remove("hide")
                    loadMore.classList.add("hide")
                    editCard.classList.add("hide")
                    
                    const putCard = document.createElement("a")
                    putCard.innerHTML = "Отредактировать"
                    putCard.style.marginRight = "0"
                    putCard.style.cursor = "pointer"
                    cardAction.append(putCard)
                    
                    contentCards.innerHTML = "";
                    contentCards.prepend(deleteCards)
                    
                    const formFullNamePut = document.createElement("div")
                    formFullNamePut.className = "input-field"
                    const inputFullNamePut = document.createElement("input")
                    inputFullNamePut.id = "fullname"
                    inputFullNamePut.type = "text"
                    formFullNamePut.append(inputFullNamePut)
                    const labelFullNamePut = document.createElement("label")
                    labelFullNamePut.className = "active"
                    labelFullNamePut.setAttribute("for", "fullname")
                    labelFullNamePut.innerHTML = "ФИО"
                    formFullNamePut.append(labelFullNamePut)
                    inputFullNamePut.value = `${info.content.fullname}`
                    
                    const formPurposePut = document.createElement("div")
                    formPurposePut.className = "input-field"
                    const inputPurposePut = document.createElement("input")
                    inputPurposePut.id = "purpose"
                    inputPurposePut.type = "text"
                    formPurposePut.append(inputPurposePut)
                    const labelPurposePut = document.createElement("label")
                    labelPurposePut.className = "active"
                    labelPurposePut.setAttribute("for", "purpose");
                    labelPurposePut.innerHTML = "Цель визита"
                    formPurposePut.append(labelPurposePut)
                    inputPurposePut.value = `${info.content.purpose}`
                    
                    const formDescriptionPut = document.createElement("div")
                    formDescriptionPut.className = "input-field"
                    const inputDescriptionPut = document.createElement("input")
                    inputDescriptionPut.id = "description"
                    inputDescriptionPut.type = "text"
                    formDescriptionPut.append(inputDescriptionPut)
                    const labelDescriptionPut = document.createElement("label")
                    labelDescriptionPut.className = "active"
                    labelDescriptionPut.setAttribute("for", "description");
                    labelDescriptionPut.innerHTML = "Описание"
                    formDescriptionPut.append(labelDescriptionPut)
                    inputDescriptionPut.value = `${info.content.description}`
                    
                    const formUrgencyPut = document.createElement("div")
                    formUrgencyPut.className = "input-field"
                    const inputUrgencyPut = document.createElement("input")
                    inputUrgencyPut.id = "urgency"
                    inputUrgencyPut.type = "text"
                    formUrgencyPut.append(inputUrgencyPut)
                    const labelUrgencyPut = document.createElement("label")
                    labelUrgencyPut.className = "active"
                    labelUrgencyPut.setAttribute("for", "urgency");
                    labelUrgencyPut.innerHTML = "Срочность"
                    formUrgencyPut.append(labelUrgencyPut)
                    inputUrgencyPut.value = `${info.content.urgency}`
                    
                    contentCards.append(formFullNamePut, formPurposePut, formDescriptionPut, formUrgencyPut)
                    
                    if (`${info.content.doctor}` === "Кардиолог") {
                        const formPressurePut = document.createElement("div")
                        formPressurePut.className = "input-field"
                        const inputPressurePut = document.createElement("input")
                        inputPressurePut.id = "pressurePut"
                        inputPressurePut.type = "text"
                        formPressurePut.append(inputPressurePut)
                        const labelPressurePut = document.createElement("label")
                        labelPressurePut.className = "active"
                        labelPressurePut.setAttribute("for", "pressure");
                        labelPressurePut.innerHTML = "Обычное давление"
                        formPressurePut.append(labelPressurePut)
                        inputPressurePut.value = `${info.content.pressure}`
                        
                        const formBodyMassPut = document.createElement("div")
                        formBodyMassPut.className = "input-field"
                        const inputBodyMassPut = document.createElement("input")
                        inputBodyMassPut.id = "bodymassPut"
                        inputBodyMassPut.type = "text"
                        formBodyMassPut.append(inputBodyMassPut)
                        const labelBodyMassPut = document.createElement("label")
                        labelBodyMassPut.className = "active"
                        labelBodyMassPut.setAttribute("for", "bodymass");
                        labelBodyMassPut.innerHTML = "ИМТ"
                        formBodyMassPut.append(labelBodyMassPut)
                        inputBodyMassPut.value = `${info.content.bodymass}`
                        
                        const formCardiovascularPut = document.createElement("div")
                        formCardiovascularPut.className = "input-field"
                        const inputCardiovascularPut = document.createElement("input")
                        inputCardiovascularPut.id = "cardiovascularPut"
                        inputCardiovascularPut.type = "text"
                        formCardiovascularPut.append(inputCardiovascularPut)
                        const labelCardiovascularPut = document.createElement("label")
                        labelCardiovascularPut.className = "active"
                        labelCardiovascularPut.setAttribute("for", "cardiovascular");
                        labelCardiovascularPut.innerHTML = "Заболевания"
                        formCardiovascularPut.append(labelCardiovascularPut)
                        inputCardiovascularPut.value = `${info.content.cardiovascular}`
                        
                        const formAgePut = document.createElement("div")
                        formAgePut.className = "input-field"
                        const inputAgePut = document.createElement("input")
                        inputAgePut.id = "agePut"
                        inputAgePut.type = "text"
                        formAgePut.append(inputAgePut)
                        const labelAgePut = document.createElement("label")
                        labelAgePut.className = "active"
                        labelAgePut.setAttribute("for", "age");
                        labelAgePut.innerHTML = "Возраст"
                        formAgePut.append(labelAgePut)
                        inputAgePut.value = `${info.content.age}`
                        
                        formUrgencyPut.after(formPressurePut, formBodyMassPut, formCardiovascularPut, formAgePut)
                        
                    } else if (`${info.content.doctor}` === "Стоматолог") {
                        const formLastVisitPut = document.createElement("div")
                        formLastVisitPut.className = "input-field"
                        const inputLastVisitPut = document.createElement("input")
                        inputLastVisitPut.id = "lastvisitPut"
                        inputLastVisitPut.type = "text"
                        formLastVisitPut.append(inputLastVisitPut)
                        const labelLastVisitPut = document.createElement("label")
                        labelLastVisitPut.className = "active"
                        labelLastVisitPut.setAttribute("for", "lastvisit");
                        labelLastVisitPut.innerHTML = "Последнее посещение"
                        formLastVisitPut.append(labelLastVisitPut)
                        inputLastVisitPut.value = `${info.content.lastvisit}`
                        
                        formUrgencyPut.after(formLastVisitPut)
                    } else if (`${info.content.doctor}` === "Терапевт") {
                        const formAgePut = document.createElement("div")
                        formAgePut.className = "input-field"
                        const inputAgePut = document.createElement("input")
                        inputAgePut.id = "agePut"
                        inputAgePut.type = "text"
                        formAgePut.append(inputAgePut)
                        const labelAgePut = document.createElement("label")
                        labelAgePut.className = "active"
                        labelAgePut.setAttribute("for", "age");
                        labelAgePut.innerHTML = "Возраст"
                        formAgePut.append(labelAgePut)
                        inputAgePut.value = `${info.content.age}`
                        
                        formUrgencyPut.after(formAgePut)
                    }
                    
                    const inputPressurePutQ = document.querySelector("#pressurePut")
                    const inputBodyMassPutQ = document.querySelector("#bodymassPut")
                    const inputCardiovascularPutQ = document.querySelector("#cardiovascularPut")
                    const inputLastVisitPutQ = document.querySelector("#lastvisitPut")
                    const inputAgePutQ = document.querySelector("#agePut")
                    
                    putCard.onclick = function () {
                        if (`${info.content.doctor}` === "Кардиолог") {
                            fetch(`https://ajax.test-danit.com/api/cards/${info.id}`, {
                                method: "put",
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8",
                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                },
                                body: JSON.stringify({
                                    "doctor": "Кардиолог",
                                    "purpose": inputPurposePut.value,
                                    "description": inputDescriptionPut.value,
                                    "urgency": inputUrgencyPut.value,
                                    "pressure": inputPressurePutQ.value,
                                    "bodymass": inputBodyMassPutQ.value,
                                    "cardiovascular": inputCardiovascularPutQ.value,
                                    "age": inputAgePutQ.value,
                                    "fullname": inputFullNamePut.value
                                })
                            })
                                .then((response) => {
                                    if (response.status === 200) {
                                        const rowCardQ = document.querySelector(".rowCard")
                                        rowCardQ.remove()
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
                        } else if (`${info.content.doctor}` === "Стоматолог") {
                            fetch(`https://ajax.test-danit.com/api/cards/${info.id}`, {
                                method: "put",
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8",
                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                },
                                body: JSON.stringify({
                                    "doctor": "Стоматолог",
                                    "purpose": inputPurposePut.value,
                                    "description": inputDescriptionPut.value,
                                    "urgency": inputUrgencyPut.value,
                                    "lastvisit": inputLastVisitPutQ.value,
                                    "fullname": inputFullNamePut.value
                                })
                            })
                                .then((response) => {
                                    if (response.status === 200) {
                                        const rowCardQ = document.querySelector(".rowCard")
                                        rowCardQ.remove()
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
                        } else if (`${info.content.doctor}` === "Терапевт") {
                            fetch(`https://ajax.test-danit.com/api/cards/${info.id}`, {
                                method: "put",
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8",
                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                },
                                body: JSON.stringify({
                                    "doctor": "Терапевт",
                                    "purpose": inputPurposePut.value,
                                    "description": inputDescriptionPut.value,
                                    "urgency": inputUrgencyPut.value,
                                    "age": inputAgePutQ.value,
                                    "fullname": inputFullNamePut.value
                                })
                            })
                                .then((response) => {
                                    if (response.status === 200) {
                                        const rowCardQ = document.querySelector(".rowCard")
                                        rowCardQ.remove()
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
                        
                    }
                }
                
                const pFullName = document.createElement("p")
                pFullName.innerHTML = "ФИО: "
                const spanFullName = document.createElement("span")
                spanFullName.className = "fullname"
                pFullName.append(spanFullName)
                
                const pDoctor = document.createElement("p")
                pDoctor.innerHTML = "Доктор: "
                const spanDoctor = document.createElement("span")
                spanDoctor.className = "doctor"
                pDoctor.append(spanDoctor)
                
                const divHide = document.createElement("div")
                divHide.className = "hide"
                
                contentCards.append(deleteCards, pFullName, pDoctor, divHide)
                
                const pPurpose = document.createElement("p")
                pPurpose.innerHTML = "Цель: "
                const spanPurpose = document.createElement("span")
                spanPurpose.className = "purpose"
                pPurpose.append(spanPurpose)
                
                const pDescription = document.createElement("p")
                pDescription.innerHTML = "Описание: "
                const spanDescription = document.createElement("span")
                spanDescription.className = "description"
                pDescription.append(spanDescription)
                
                const pUrgency = document.createElement("p")
                pUrgency.innerHTML = "Срочность: "
                const spanUrgency = document.createElement("span")
                spanUrgency.className = "urgency"
                pUrgency.append(spanUrgency)
                
                const pPressure = document.createElement("p")
                pPressure.innerHTML = "Обычное давление: "
                const spanPressure = document.createElement("span")
                spanPressure.className = "pressure"
                pPressure.append(spanPressure)
                
                const pBodyMass = document.createElement("p")
                pBodyMass.innerHTML = "ИМТ: "
                const spanBodyMass = document.createElement("span")
                spanBodyMass.className = "bodymass"
                pBodyMass.append(spanBodyMass)
                
                const pCardiovascular = document.createElement("p")
                pCardiovascular.innerHTML = "Заболевания: "
                const spanCardiovascular = document.createElement("span")
                spanCardiovascular.className = "cardiovascular"
                pCardiovascular.append(spanCardiovascular)
                
                const pLastVisit = document.createElement("p")
                pLastVisit.innerHTML = "Последнее посещение: "
                const spanLastVisit = document.createElement("span")
                spanLastVisit.className = "lastvisit"
                pLastVisit.append(spanLastVisit)
                
                const pAge = document.createElement("p")
                pAge.innerHTML = "Возраст: "
                const spanAge = document.createElement("span")
                spanAge.className = "age"
                pAge.append(spanAge)
                
                divHide.append(pPurpose, pDescription, pUrgency, pPressure, pBodyMass, pCardiovascular, pLastVisit, pAge)
                
                spanFullName.append(`${info.content.fullname}`)
                spanDoctor.append(`${info.content.doctor}`)
                spanPurpose.append(`${info.content.purpose}`)
                spanDescription.append(`${info.content.description}`)
                spanUrgency.append(`${info.content.urgency}`)
                spanPressure.append(`${info.content.pressure}`)
                spanBodyMass.append(`${info.content.bodymass}`)
                spanCardiovascular.append(`${info.content.cardiovascular}`)
                spanLastVisit.append(`${info.content.lastvisit}`)
                spanAge.append(`${info.content.age}`)
            })
        })
}

getcontent()