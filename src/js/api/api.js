const EnterSite = document.querySelector(".enter-btn")

const InputEmail = document.querySelector("#email")
const InputPassword = document.querySelector("#password")

EnterSite.onclick=function(){
        fetch("https://ajax.test-danit.com/api/cards/login", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email":InputEmail.value, "password":InputPassword.value
            })
        })
            .then(response => response.text())
            .catch(error => console.error('Error:', error))
            .then(response => console.log(JSON.stringify(response)))
}

