const forms = document.querySelectorAll('form');

forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const errorText = form.querySelector(".error-message");
        const emailInput = form.querySelector("input");
        const emailValue = emailInput.value;

        const isValidEmail = /\S+@\S+\.\S+/.test(emailValue);

        if (!isValidEmail) {
            emailInput.classList.add("error");

            errorText.style.display = "block";
            errorText.innerHTML = "Please check your email again";
        }else{
            form.submit();
            console.log("success");
        }
    });
});

const emailInput = document.querySelectorAll("input");

emailInput.forEach(input => {
    input.addEventListener("keydown", function () {
        const errorText = input.nextElementSibling;

        input.classList.remove("error");
        
        errorText.style.display = "none";
        errorText.innerHTML = "";
    });
});