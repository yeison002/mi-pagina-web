// Validación de formulario Bootstrap 5
(() => {
  'use strict';

  // Activar validación de formularios
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
        form.reset();
        form.classList.remove('was-validated');
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Scroll suave para anclas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // Cerrar menú móvil al hacer clic
        const navCollapse = document.getElementById('navMenu');
        if (navCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navCollapse).hide();
        }
      }
    });
  });

  // Navbar con sombra al hacer scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
  });

  console.log('🎓 CECyTEM Aculco - Sitio cargado correctamente');
})();