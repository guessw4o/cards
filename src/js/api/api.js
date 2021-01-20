const EnterSite = document.querySelector(".enter-btn")

const InputEmail = document.querySelector("#email")
const InputPassword = document.querySelector("#password")

EnterSite.onclick=function() {
    fetch("https://ajax.test-danit.com/api/cards/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "email": InputEmail.value, "password": InputPassword.value
        })
    })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            console.log(data);
            localStorage.setItem('token', data)
        })
}