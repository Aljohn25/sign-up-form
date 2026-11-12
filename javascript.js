const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

const form = document.getElementById('signup-form');
const formTitle1 = document.getElementById("form-title1")
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        return;
    }

    e.preventDefault(); 

    form.classList.add('hidden');
    formTitle1.classList.add('hidden');

    successMessage.style.display = 'block';
});

const loginForm = document.getElementById('login-form');
const loginBtn = document.querySelectorAll('.login-form-btn');

loginBtn.forEach( button => { 
    button.onclick = () => {
        successMessage.style.display = 'none';
        loginForm.style.display = 'block';
        form.classList.add('hidden');
        formTitle1.classList.add('hidden');
    }
});

const backBtn = document.querySelector('.back-btn');

backBtn.onclick = () => {
   
    form.classList.remove('hidden');
    formTitle1.classList.remove('hidden');
    successMessage.style.display = 'none';
    loginForm.style.display = 'none';

};