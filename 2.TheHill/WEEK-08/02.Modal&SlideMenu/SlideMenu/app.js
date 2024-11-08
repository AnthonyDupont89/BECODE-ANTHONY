// JavaScript pour faire apparaître le menu
const menuIcon = document.querySelector('.menu-icon');
const slideMenu = document.querySelector('.slideMenu');

menuIcon.addEventListener('click', () => {
  slideMenu.classList.toggle('visible'); // Affiche ou cache l'aside
});
