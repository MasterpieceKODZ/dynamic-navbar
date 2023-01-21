const navToggleBtn = document.querySelector(".nav-toggle"),
	navbarRoot = document.querySelector(".navbar-root"),
	navItems = document.querySelectorAll(".nav-item"),
	copyDate = document.getElementById("copyright-date");

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

// when any navlink is clicked the page scrolls to the associated section under the navbar
navItems.forEach((item) => {
	item.addEventListener("click", (e) => {
		const data = e.currentTarget.dataset.toggles;

		navbarRoot.classList.remove("open");

		// wait for navbar to close before scrolling
		setTimeout(() => {
			// get navbar associated with the clicked nav item
			const activeSection = document.querySelector(`.${data}`);

			// get the top offset of the associated section relative to the top of the viewport
			const sectionYOffset = activeSection.getBoundingClientRect().top;

			// get the height of the navbar
			const navbarRootHeight = navbarRoot.getBoundingClientRect().height;

			if (sectionYOffset == navbarRootHeight) {
				window.scrollTo(0, window.scrollY);
			} else if (sectionYOffset > navbarRootHeight) {
				window.scrollTo(0, sectionYOffset - navbarRootHeight + window.scrollY);
			} else if (sectionYOffset < navbarRootHeight) {
				window.scrollTo(0, window.scrollY - navbarRootHeight + sectionYOffset);
			}
		}, 500);
	});
});

copyDate.textContent = new Date().getFullYear();
