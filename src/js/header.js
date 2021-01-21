//создаем header
const header = document.createElement('header')
header.className = "header hoverable";
document.body.prepend(header)

const logoA = document.createElement('a')
logoA.href = "#"
const logoImg = document.createElement('img')
logoImg.src = "src/img/logo2.png"
logoImg.alt = "Logo"
header.append(logoA)
logoA.append(logoImg)

const headerBtn = document.createElement('div')
header.append(headerBtn)

const enterBtn = document.createElement('a')
enterBtn.className = "waves-effect waves-light btn-large modal-trigger headerBtn__enter active"
enterBtn.href = "#signin"
enterBtn.innerHTML = "Вход"
headerBtn.append(enterBtn)

const createBtn = document.createElement('a')
createBtn.className = "waves-effect waves-light btn-large modal-trigger headerBtn__create"
createBtn.href = "#create"
createBtn.innerHTML = "Создать"
headerBtn.append(createBtn)
