function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if (name.length < 2) {
        formMessage.textContent = "Имя должно содержать минимум 2 символа.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Введите корректный email.";
        formMessage.style.color = "red";
        return;
    }

    if (message.length < 5) {
        formMessage.textContent = "Опишите груз подробнее.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Заявка успешно отправлена!";
    formMessage.style.color = "green";

    document.getElementById("contactForm").reset();
});
