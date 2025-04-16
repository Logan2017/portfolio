// Función para aparición de la flecha de ir hacia arriba

const elementos = document.querySelectorAll('.upWrapper');
const puntoAparicion = 2400;

window.addEventListener('scroll', () => {
  elementos.forEach(el => {
    if (window.scrollY > puntoAparicion) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  }); 
});


// Función de hacer blur en el main en menú mobile

document.addEventListener('DOMContentLoaded', function () {
    const mobileIcon = document.querySelector('.mobile-icon');
    const main = document.querySelector('main');
    const body = document.body;
  
    if (mobileIcon && main) {
      const toggleMobileMenuEffects = () => {
        if (mobileIcon.checked) {
          main.style.filter = 'blur(10px)';
          body.classList.add('no-scroll');
        } else {
          main.style.filter = 'none';
          body.classList.remove('no-scroll');
        }
      };
  
      mobileIcon.addEventListener('change', toggleMobileMenuEffects);
      toggleMobileMenuEffects(); // Por si ya está marcado al cargar
    }
  });
  
  