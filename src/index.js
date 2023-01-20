const navToggleBtn = document.querySelector(".nav-toggle");
const navbarRoot = document.querySelector(".navbar-root");

navToggleBtn.addEventListener("click", (e) => {
	navbarRoot.classList.toggle("open");
});
