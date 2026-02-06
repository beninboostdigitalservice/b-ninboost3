/* ============================================
   MENU MOBILE - Bénin Boost Digital
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // Récupérer les éléments
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Vérifier que les éléments existent
    if (!navToggle || !navMenu) {
        console.error('Menu mobile : éléments non trouvés');
        return;
    }
    
    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        const isOpen = navMenu.classList.contains('show');
        
        if (isOpen) {
            // Fermer le menu
            navMenu.classList.remove('show');
            navToggle.setAttribute('aria-label', 'Ouvrir le menu');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = ''; // Réactiver le scroll
        } else {
            // Ouvrir le menu
            navMenu.classList.add('show');
            navToggle.setAttribute('aria-label', 'Fermer le menu');
            navToggle.innerHTML = '<i class="fas fa-times"></i>';
            document.body.style.overflow = 'hidden'; // Bloquer le scroll
        }
    }
    
    // Écouter le clic sur le bouton hamburger
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll('.nav__link, .nav__cta');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            toggleMenu(); // Ferme le menu
        });
    });
    
    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('show') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            toggleMenu();
        }
    });
    
    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('show')) {
            toggleMenu();
        }
    });
    
});