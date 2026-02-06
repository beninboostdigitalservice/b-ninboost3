/* ============================================
   MENU MOBILE - Bénin Boost Digital
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // Récupérer les éléments
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu ? navMenu.querySelectorAll('.nav__link, .nav__cta') : [];
    
    // Vérifier que les éléments existent
    if (!navToggle || !navMenu) {
        console.warn('Menu mobile : éléments non trouvés');
        return;
    }
    
    // Ajouter aria-label initial
    navToggle.setAttribute('aria-label', 'Ouvrir le menu');
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('id', 'nav-menu');
    
    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        const isOpen = navMenu.classList.contains('show');
        
        if (isOpen) {
            // Fermer le menu
            closeMenu();
        } else {
            // Ouvrir le menu
            openMenu();
        }
    }
    
    // Fonction pour ouvrir le menu
    function openMenu() {
        navMenu.classList.add('show');
        navToggle.setAttribute('aria-label', 'Fermer le menu');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden'; // Bloquer le scroll
    }
    
    // Fonction pour fermer le menu
    function closeMenu() {
        navMenu.classList.remove('show');
        navToggle.setAttribute('aria-label', 'Ouvrir le menu');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = ''; // Réactiver le scroll
    }
    
    // Écouter le clic sur le bouton hamburger
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('show') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('show')) {
            closeMenu();
        }
    });
    
    // Fermer le menu lors du redimensionnement si on passe en desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767 && navMenu.classList.contains('show')) {
            closeMenu();
        }
    });
    
    // Fermer le menu quand on scrolle si on est en mobile
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 767 && navMenu.classList.contains('show')) {
            closeMenu();
        }
    }, { passive: true });
    
});