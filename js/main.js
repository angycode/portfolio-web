// ================= FADE IN =================
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));


// ================= CURSOR =================
const cursor = document.querySelector('.cursor');
const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
  if (!cursor || !glow) return;

  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});


// ================= NAVBAR SCROLL =================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ================= HERO CAMERA (SOLO ZOOM CINE) =================
const camera = document.querySelector('.hero-camera');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // movimiento vertical suave
  const translateY = scrollY * 0.4;

  // zoom cinematográfico limpio (SIN rotación)
  const scale = Math.max(1.25, 1.8 - scrollY / 1200);

  if (camera) {
    camera.style.transform = `
      translate(-50%, calc(-50% + ${translateY}px))
      scale(${scale})
    `;
  }
});