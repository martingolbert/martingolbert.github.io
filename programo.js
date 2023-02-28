const btnIrArriba = document.getElementById('irArribaBtn');

btnIrArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});