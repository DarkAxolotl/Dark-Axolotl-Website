document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
            const icon = navbarToggler.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
                const icon = navbarToggler.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(10, 10, 12, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.background = 'rgba(10, 10, 12, 0.8)';
        }
    });

    // Modals
    const modalTriggers = document.querySelectorAll('[data-bs-toggle="modal"]');
    const body = document.body;

    // Create modal overlay if it doesn't exist (it will be in HTML, but good to have reference)
    // We will assume the HTML structure is updated to use our new modal system

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute('href').substring(1); // Remove #
            const modal = document.getElementById(targetId);
            
            if (modal) {
                modal.classList.add('active');
                body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modals
    document.querySelectorAll('.close-modal, .modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el || el.classList.contains('close-modal') || el.closest('.close-modal')) {
                const modal = el.closest('.modal-overlay');
                if (modal) {
                    modal.classList.remove('active');
                    body.style.overflow = '';
                }
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                body.style.overflow = '';
            }
        }
    });
});
