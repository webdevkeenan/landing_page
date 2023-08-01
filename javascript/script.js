const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header__links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})