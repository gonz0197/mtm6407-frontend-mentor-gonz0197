const menuIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

// abrir menú
menuIcon.addEventListener('click', () => {
  navLinks.classList.add('active');
  overlay.classList.add('active');
  menuIcon.style.display = 'none';
  closeIcon.classList.add('active');
});

// cerrar menú
closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.classList.remove('active');
});

// cerrar menú al hacer clic en el fondo oscuro
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.classList.remove('active');
});
