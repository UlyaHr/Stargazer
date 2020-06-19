//===== Navbar Sticky Setelah frontpage di scroll
const navContainer = document.querySelector(".nav-container");
const sectionOne = document.querySelector(".frontpage");

const sectionOneOptions = {
  rootMargin: "-80px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navContainer.classList.add("scrolled");
    } else {
      navContainer.classList.remove("scrolled");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

//===== Burger Menu =====//
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navMenu = document.querySelector('.nav-menu');
	const navSubmenu = document.querySelectorAll('.nav-submenu');

	burger.addEventListener('click', () => {
		//Trigger Menu
		navMenu.classList.toggle("open");
		navSubmenu.forEach(link => {
			link.classList.toggle("fade");
		});
		//Trigger burger
		burger.classList.toggle("toggle");
	});
}

navSlide();