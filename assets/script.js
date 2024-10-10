document.addEventListener('DOMContentLoaded', () => {
    console.log("Site da loja carregado!");
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}