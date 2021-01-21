//логин и пароль отправляем на сервер и получаем ответ
const enterSite = document.querySelector(".enter-btn")

const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")

const enterError = document.querySelector(".enter-error")

let headerBtn__enter = document.querySelector(".headerBtn__enter")
let headerBtn__create = document.querySelector(".headerBtn__create")

let modalSignin = document.querySelector(".signin")

enterSite.onclick=function() {
    fetch("https://ajax.test-danit.com/api/cards/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "email": inputEmail.value, "password": inputPassword.value
        })
    })
        .then((response) => {
            if (response.status !== 200) {
                enterError.innerHTML="Incorrect Login or Password"
                return("noid")
            }else{
                headerBtn__enter.classList.remove("active");
                headerBtn__create.classList.add("active");
                modalSignin.M_Modal.close();
                return response.text();
            }
        })
        .then((data) => {
            localStorage.setItem('token', data)
        })

}

const token = localStorage.getItem("token")

if (token === "noid" || token == null) {
    headerBtn__enter.classList.add("active");
    headerBtn__create.classList.remove("active");
}else{
    headerBtn__enter.classList.remove("active");
    headerBtn__create.classList.add("active");
}