fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // 🔥 AGORA SIM os elementos existem
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    document.querySelectorAll(".dropdown > .botaoMenu").forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                btn.parentElement.classList.toggle("active");
            }
        });
    });
});