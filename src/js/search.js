const searchBtn = document.querySelector(".searchBtn")

searchBtn.onclick = function () {
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

                //текстовое поле
                const autocomplete = document.querySelector(".autocomplete")
                console.log(autocomplete.value)
                
                //в массив
                const arrayInfo = Object.values(info.content)
                
                //поиск в массиве
                const filterItems = (query) => {
                    return arrayInfo.filter((el) =>
                        el.toLowerCase().indexOf(query.toLowerCase()) > -1
                    )
                }
                
                console.log(filterItems(autocomplete.value))
                
                const testUrgency = document.querySelector(".selectsearchurgency")
                console.log(testUrgency.value)
                
                if (filterItems(autocomplete.value).length > 0 && testUrgency.value === `${info.content.urgency}`) {
                    console.log("что-то есть, нужно отрисовать как getcontent")
                }
                
                
            })
            
            
        })
}