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

//Pasword Match
const pWord = document.querySelector('#password');
const cPWord = document.querySelector('#confirm-password');
const msg = document.querySelector('#passwordMessage');
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

//Email checker
const email = document.querySelector('#email');
const emailMsg = document.querySelector('#emailMessage');
function emailCheck() {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const inputValue = email.value.trim();

    if (!regex.test(inputValue)) {
        email.classList.add('inputInvalid');
        emailMsg.innerHTML = 'Please enter a valid email.';
    } else {
        email.classList.remove('inputInvalid');
        emailMsg.innerHTML = '';
    }
}
email.addEventListener('blur', emailCheck);

//User name checker
const username = document.querySelector('#user-name')
const userMessage = document.querySelector('#userMessage');
function userNameCheck() {
    const usernameLength = username.value.trim().length;
    if (usernameLength < 5 || usernameLength > 15) {
        username.classList.add('inputInvalid');
        userMessage.innerHTML = 'Please enter username between 5 and 15 characters';
    } else {
        username.classList.remove('inputInvalid');
        userMessage.innerHTML = '';
    }
}
username.addEventListener('blur', userNameCheck);

//Phone number check
const phoneNumber = document.querySelector('#phone-number');
const phoneMessage = document.querySelector('#phoneMessage');
function phoneNumberCheck() {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const phoneVal = phoneNumber.value.trim();

    if(!regex.test(phoneVal)) {
        phoneNumber.classList.add('inputInvalid');
        phoneMessage.innerHTML = 'Please enter valid phone number';
    } else {
        phoneNumber.classList.remove('inputInvalid');
        phoneMessage.innerHTML = '';
    }
}
phoneNumber.addEventListener('blur', phoneNumberCheck);

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

//Password matches format
const pword = document.querySelector('#password');
const mess = document.querySelector('#passMessage');

function passwordCheck() {
    const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const passwordVal = pword.value.trim();
    const passwordLength = passwordVal.length;
        
    if (passwordLength < 8) {
        pword.classList.add('inputInvalid');
        mess.innerHTML = "Password must be over 8 characters";
    }
    else if (!regex.test(passwordVal)) {
        pword.classList.add('inputInvalid');
        mess.innerHTML = "Password must contain atleast 1 upperCase, lowerCase, number/specialChar";  
    } else {
        pword.classList.remove('inputInvalid');
        mess.innerHTML = "";
    }
}
pword.addEventListener('blur', passwordCheck)
