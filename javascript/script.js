
// Select Hamburger bars and Nav Links
const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header__links");


// When Hamburger is clicked toggle navbar
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerLinks.classList.toggle("active");
})

// Release Navbar upon click
document.querySelectorAll(".header__links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerLinks.classList.remove("active");
}))