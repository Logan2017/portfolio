// Desactiva scroll suave al inicio de carga
document.documentElement.style.scrollBehavior = 'auto';
document.body.style.scrollBehavior = 'auto';

// Lo vuelve a activar al terminar de cargar completamente
window.addEventListener('load', () => {
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = '';
    document.body.style.scrollBehavior = '';
  }, 100);
});

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
    const html = document.documentElement;
  
    let scrollY = 0;
  
    if (mobileIcon && main) {
      const toggleMobileMenuEffects = () => {
        if (mobileIcon.checked) {
          scrollY = window.scrollY;
  
          // Bloquea scroll sin alterar scroll actual
          body.style.position = 'fixed';
          body.style.top = `-${scrollY}px`;
          body.style.left = '0';
          body.style.right = '0';
          body.style.overflow = 'hidden';
  
          // Desactiva scroll-behavior en html y body
          body.style.scrollBehavior = 'auto';
          html.style.scrollBehavior = 'auto';
  
          // Aplica blur
          main.style.filter = 'blur(10px)';
        } else {
          // Limpia estilos de scroll bloqueado
          body.style.position = '';
          body.style.top = '';
          body.style.left = '';
          body.style.right = '';
          body.style.overflow = '';
          main.style.filter = 'none';
  
          // Desactiva scroll-behavior para evitar scroll suave
          body.style.scrollBehavior = 'auto';
          html.style.scrollBehavior = 'auto';
  
          // Restaura scroll instantáneamente
          window.scrollTo(0, scrollY);
  
          // Restaura scroll-behavior original después de un breve tiempo
          setTimeout(() => {
            body.style.scrollBehavior = '';
            html.style.scrollBehavior = '';
          }, 50);
        }
      };
  
      mobileIcon.addEventListener('change', toggleMobileMenuEffects);
      toggleMobileMenuEffects(); // Por si ya está marcado al cargar
    }
  });
    
    
  
  