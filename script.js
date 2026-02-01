/* ============================================
   NAVBAR — Scroll Effect
   ============================================ */
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ============================================
   REVEAL ANIMATIONS — Intersection Observer
   ============================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});
