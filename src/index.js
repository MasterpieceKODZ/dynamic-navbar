const navToggleBtn = document.querySelector(".nav-toggle");
const navbarRoot = document.querySelector(".navbar-root");

// open the navbar nav on small screen when the toggle button is clicked
navToggleBtn.addEventListener("click", (e) => {
	navbarRoot.classList.toggle("open");
});

// get the current height of the navbar root
const navHeight = navbarRoot.getBoundingClientRect().height;

//when page is scrolled upwards to half of the height of the navbar the navbar background should turn to white
window.onscroll = (e) => {
	if (e.currentTarget.scrollY > navHeight / 2)
		navbarRoot.classList.add("active");
	else navbarRoot.classList.remove("active");
};
