const elementos = document.querySelectorAll('a.up');
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