// Seleciona elementos
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Adiciona evento de clique no botão hambúrguer
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});