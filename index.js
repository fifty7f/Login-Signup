function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formMessage");

    messageElement.textContent = message;
    messageElement.classList.remove("formMessage--success", "formMessage--error");
    messageElement.classList.add(`formMessage--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("formInput-error");
    inputElement.parentElement.querySelector(".formInput-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("formInput-error");
    inputElement.parentElement.querySelector(".formInput-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const creatAccountForm = document.querySelector("#createAccount");
    const forgotPasswordForm = document.querySelector("#forgotPassword");

//When you click on create account it hides login and reveals creataccount
//e is a variable, which is assigned to prevent default
//code will not work unless prevent default is listed, it will automatically go to the same page
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formHidden");
        creatAccountForm.classList.remove("formHidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        creatAccountForm.classList.add("formHidden");
    });

    document.querySelector("#forgotPasswordForm").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formHidden");
        creatAccountForm.classList.add ("formHidden");
        forgotPasswordForm.classList.remove("formHidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination.");
    })
});

document.querySelectorAll(".formInput").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElement, "Username must be at least 10 characters in length");
        }
    });

    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});
