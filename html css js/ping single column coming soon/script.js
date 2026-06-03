const form = document.getElementById("notifyForm");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = email.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        showError("Whoops! It looks like you forgot to add your email");
        return;
    }

    if (!emailPattern.test(emailValue)) {
        showError("Please provide a valid email address");
        return;
    }

    email.classList.remove("error");
    errorMessage.textContent = "";

    alert("Thanks! You'll be notified.");
    form.reset();
});

function showError(message) {
    errorMessage.textContent = message;
    email.classList.add("error");
}