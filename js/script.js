// Menu mobile toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Marca o link ativo do menu conforme a seção visível
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(section => observer.observe(section));

// Header muda de aparência ao rolar
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,0.35)' : 'none';
});
