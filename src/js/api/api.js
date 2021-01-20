const EnterSite = document.querySelector(".enter-btn")

const InputEmail = document.querySelector("#email")
const InputPassword = document.querySelector("#password")

const EnterError = document.querySelector(".enter-error")

let HeaderBtn__enter = document.querySelector(".headerBtn__enter")
let HeaderBtn__create = document.querySelector(".headerBtn__create")

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
            if (response.status !== 200) {
                EnterError.innerHTML="Incorrect Login or Password"
            }else{
                HeaderBtn__enter.classList.remove("active");
                HeaderBtn__create.classList.add("active");
            }
            return response.text();
        })
        .then((data) => {
            localStorage.setItem('token', data)
        })
    
}

const token = localStorage.getItem("token")

if (token===null) {
    HeaderBtn__enter.classList.add("active");
    HeaderBtn__create.classList.remove("active");
}else{
    HeaderBtn__enter.classList.remove("active");
    HeaderBtn__create.classList.add("active");
}