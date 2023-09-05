function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Typing animation
var typed = new Typed(".typing", {
  strings: ['Web Developer', 'Backend Dev', 'Database Admin', 'Frontend Dev'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})
var typed = new Typed(".typing-2", {
  strings: ['Web Developer', 'Backend Dev', 'Database Admin', 'Frontend Dev'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})
