// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Menu di klik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
}

// Menutup sidebar
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
})

// Animasi mengetik
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Fullstack Developer"
  }, 0);
  setTimeout(() => {
    text.textContent = "UI/UX Designer"
  }, 3000);
}

textLoad();
setInterval(textLoad, 6000);