function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Typing animation
var typed = new Typed(".typing", {
  strings: ['FullStack Developer', 'Coding Coach', 'Database Admin', 'IT Security'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})
var typed = new Typed(".typing-2", {
  strings: ['FullStack Developer', 'Coding Coach', 'Database Admin', 'IT Security'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

