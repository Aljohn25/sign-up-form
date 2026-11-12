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