const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



// 



let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
slideIndex += n;
showSlides(slideIndex);
}

function showSlides(n) {
const slides = document.querySelectorAll(".slide");
if (n >= slides.length) {
slideIndex = 0;
}
if (n < 0) {
slideIndex = slides.length - 1;
}
slides.forEach((slide) => (slide.style.display = "none"));
slides[slideIndex].style.display = "block";
}

// Auto slideshow
setInterval(() => {
slideIndex++;
showSlides(slideIndex);
}, 3000);