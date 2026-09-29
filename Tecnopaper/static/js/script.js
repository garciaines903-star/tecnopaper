document.addEventListener('DOMContentLoaded', () => {
    // 1. Resaltar la pestaña activa en el menú de navegación
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = '#f4d35e';
            link.style.fontWeight = 'bold';
        }
    });

    // 2. Control de envío del formulario de contacto (si existe en la vista actual)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const alertBox = document.getElementById('alert-message');
            if (alertBox) {
                alertBox.style.display = 'block';
                alertBox.textContent = '¡Gracias por contactar a Tecnopaper! Responderemos a tu solicitud muy pronto.';
            }

            contactForm.reset();
        });
    }
});