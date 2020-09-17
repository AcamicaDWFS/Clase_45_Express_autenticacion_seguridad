//Cambiar pantallas

let registerSection = document.getElementById('registerSection');
let loginSection = document.getElementById('loginSection');
let btnLogin = document.getElementById('btn-login');
let btnHome = document.getElementById('btn-home');
let btnSubmit = document.getElementById('btn-submit');
let welcomeSection = document.getElementById('welcome');

btnLogin.addEventListener('click', () => {
    if(loginSection.style.display === 'none' ){
        loginSection.style.display = 'inline';
        registerSection.style.display = 'none';
    } else {
        loginSection.style.display = 'inline';
        registerSection.style.display = 'none';
    }
})

btnHome.addEventListener('click', () => {
    if(registerSection.style.display === 'none' ){
        registerSection.style.display = 'inline';
        loginSection.style.display = 'none';
    } else {
        loginSection.style.display = 'none';
        registerSection.style.display = 'inline';
    }
})
