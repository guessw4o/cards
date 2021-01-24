//генерируем модалочку логина
const modalSignin = document.createElement("div")
modalSignin.id = "signin"
modalSignin.className = "modal signin"

document.body.append(modalSignin)

const modalContent = document.createElement("div")
modalContent.className = "modal-content right-align"
modalSignin.append(modalContent)

const rowLoginPasswd = document.createElement("ul")
rowLoginPasswd.className = "row"

const formEmail = document.createElement("li")
formEmail.className = "input-field col s12"

const inputEmail = document.createElement("input")
inputEmail.id = "email"
inputEmail.type = "email"
inputEmail.className = "validate"

const labelEmail = document.createElement("label")
labelEmail.setAttribute("for", "email")
labelEmail.innerHTML = "Email"

formEmail.append(inputEmail, labelEmail)

const formPassword = document.createElement("li")
formPassword.className = "input-field col s12"

const inputPassword = document.createElement("input")
inputPassword.id = "password"
inputPassword.type = "password"
inputPassword.className = "validate"

const labelPassword = document.createElement("label")
labelPassword.setAttribute("for", "password")
labelPassword.innerHTML = "Password"

formPassword.append(inputPassword, labelPassword)

rowLoginPasswd.append(formEmail, formPassword)

const enterError = document.createElement("span")
enterError.className = "enter-error left"

const enterSite = document.createElement("button")
enterSite.className = "waves-effect waves-light btn enter-btn"
enterSite.href = "#"
enterSite.innerHTML = "Войти"

modalContent.append(rowLoginPasswd, enterError, enterSite)



//По нажатию войти отправляем запрос и получаем токен или ошибку
enterSite.onclick = function () {
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
                enterError.innerHTML = "Incorrect Login or Password"
                return ("noid")
            } else {
                enterBtn.classList.remove("active");
                createBtn.classList.add("active");
                modalSignin.M_Modal.close();
                return response.text();
            }
        })
        .then((data) => {
            localStorage.setItem('token', data)
        })
}

//Проверяем на наличие токена и отображаем или кнопку Вход или Создать
const token = localStorage.getItem("token")

if (token === "noid" || token == null) {
    enterBtn.classList.add("active");
    createBtn.classList.remove("active");
} else {
    enterBtn.classList.remove("active");
    createBtn.classList.add("active");
}
