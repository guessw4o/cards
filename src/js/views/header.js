const Header = document.createElement('header')
Header.className = "header hoverable";
document.body.prepend(Header)

const LogoA = document.createElement('a')
LogoA.href = "#"
const LogoImg = document.createElement('img')
LogoImg.src = "src/img/logo2.png"
LogoImg.alt = "Logo"
Header.append(LogoA)
LogoA.append(LogoImg)

const HeaderBtn = document.createElement('div')
Header.append(HeaderBtn)

const EnterBtn = document.createElement('a')
EnterBtn.className = "waves-effect waves-light btn-large modal-trigger headerBtn__enter active"
EnterBtn.href = "#signin"
EnterBtn.innerHTML = "Вход"
HeaderBtn.append(EnterBtn)

const CreateBtn = document.createElement('a')
CreateBtn.className = "waves-effect waves-light btn-large modal-trigger headerBtn__create"
CreateBtn.href = "#create"
CreateBtn.innerHTML = "Создать"
HeaderBtn.append(CreateBtn)
