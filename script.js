//toggle theme
function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    const icon = document.querySelector('#mode')
    if (newTheme === 'dark') {
        icon.innerHTML = "<i class=\"fa-regular fa-moon\"></i>"
    } else {
        icon.innerHTML = "<i class=\"fa-regular fa-sun\"></i>"
    }
}
  
document.querySelector('#mode').addEventListener('click', setTheme)

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.className = 'dark';
}

function showErrors() {
    
}

function passwordMatch() {
    const password = document.getElementById(p-word);
    const confPassword = document.getElementById(confirm-password);
}

function emailCheck() {

}

function userNameCheck() {

}

function phoneNumberCheck() {

}

function passwordCheck() {

}

//show password toggle
const showP = document.querySelector('.show1');
const password = document.querySelector('#password');

showP.addEventListener("click", showPassword);

function showPassword() {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    showP.classList.toggle('showFocus') 
}

//show Confirm password
const showConfP = document.querySelector('.show2');
const confPassword = document.querySelector('#confirm-password');

showConfP.addEventListener("click", showPasswordConf)

function showPasswordConf() {
    const type = confPassword.getAttribute("type") === "password" ? "text" : "password";
    confPassword.setAttribute("type", type);

    showConfP.classList.toggle('showFocus') 
}
