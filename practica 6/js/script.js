const hamburguer = document.getElementById('hamburguer')
const navMenu = document.getElementById('nav-menu')
const navLinks = document.getElementById('nav-link')

// Abrir o cerrar el menu
hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// cerrar el menu 