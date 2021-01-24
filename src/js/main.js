function renderCards(){
    const main = document.querySelector(".search")
    
    const rowCard = document.createElement("div")
    rowCard.className = "rowCard"
    main.append(rowCard)
}
renderCards()

function getcontent() {
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
                
                const rowCardC = document.querySelector(".rowCard")
                
                const colCards = document.createElement("div")
                colCards.className = "col m4"
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
                    divHide.classList.remove("hide");
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
