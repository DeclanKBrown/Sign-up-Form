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

//Function to show error
function showErrors() {
    
}

//Pasword Match
const pWord = document.querySelector('#password');
const cPWord = document.querySelector('#confirm-password');
const msg = document.querySelector('#cpwmessage');
function passwordMatch() {
    console.log(pWord.value);
    if (pWord.value !== cPWord.value) {
        pWord.classList.add('inputInvalid');
        cPWord.classList.add('inputInvalid');
        msg.innerHTML = 'Passwords do not match';
    } else {
        pWord.classList.remove('inputInvalid');
        cPWord.classList.remove('inputInvalid');
        msg.innerHTML = '';
    }
}
cPWord.addEventListener('blur', passwordMatch);

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
