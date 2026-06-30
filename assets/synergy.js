document.addEventListener('DOMContentLoaded', () => {
  const layers = document.querySelectorAll('[data-speed]');
  const vh = window.innerHeight;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    layers.forEach(layer => {
      const speed = parseFloat(layer.dataset.speed);
      layer.style.transform = `translateY(${scrollY * -speed}px)`;
    });
  });
});