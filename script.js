function toggleTheme() {
   
}
  
document.querySelector('.mode').addEventListener('click', toggleTheme);

function showErrors() {
    
}

// function passwordMatch() {
//     const password = document.getElementById(p-word);
//     const confPassword = document.getElementById(confirm-password);
// }

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
