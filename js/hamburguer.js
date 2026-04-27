const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        dropdown.classList.toggle("active");
    }
});