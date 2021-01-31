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
                const autocomplete = document.querySelector(".autocomplete")
                console.log(autocomplete.value)
    
                const arrayInfo = Object.values(info.content)

                
                const filterItems = (query) => {
                    return arrayInfo.filter((el) =>
                        el.toLowerCase().indexOf(query.toLowerCase()) > -1
                    )
                }
                
                console.log(filterItems(autocomplete.value))
                
                if (filterItems(autocomplete.value).length > 0) {
                    console.log("что-то есть")
                }
            })
            
            
        })
}