document.addEventListener('DOMContentLoaded', function() {
    // --- Resaltar enlace de navegación activo según la sección visible ---
    const sections = document.querySelectorAll('section[id]'); // Selecciona secciones con ID
    const navLinks = document.querySelectorAll('header nav a');

    const activateNavLink = (link) => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    };

    // Función para detectar la sección visible al hacer scroll
    const onScroll = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Damos un pequeño margen superior para activar el enlace antes
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });

        // Caso especial para cuando estamos arriba del todo (Hero)
        if (pageYOffset < sections[0].offsetTop - window.innerHeight / 2) {
             navLinks.forEach(nav => nav.classList.remove('active'));
             const homeLink = document.querySelector('header nav a[href="#hero"]');
             if(homeLink) homeLink.classList.add('active');
        }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Ejecutar una vez al cargar para establecer el estado inicial

    // --- Podrías añadir más interacciones aquí ---
    // Por ejemplo: Animaciones al hacer scroll, validación de formularios, etc.

    console.log("MisBonsais.com - Página cargada y script funcionando.");
});