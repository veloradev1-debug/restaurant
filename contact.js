// contact.js — Cleaned & Unified
const form = document.getElementById('reservation-form');
const formMessage = document.getElementById('form-message');
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const body = document.body;

// === Form ===
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { fullname, phone, email, date } = form;
  if (!fullname.value || !phone.value || !email.value || !date.value) {
    formMessage.textContent = 'Please fill in all fields';
    formMessage.style.color = '#c0392b';
    return;
  }
  formMessage.style.color = '#FFD700';
  formMessage.textContent = 'Sending your reservation request...';
  setTimeout(() => {
    formMessage.textContent = 'Thank you! Your reservation request has been received.';
    form.reset();
  }, 1500);
});

// === Navigation ===
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navToggle.classList.toggle('active');
  siteNav.classList.toggle('open');
  body.classList.toggle('nav-open');
});

// Close nav on outside click
document.addEventListener('click', (e) => {
  if (!body.classList.contains('nav-open')) return;
  if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
    closeNav();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && body.classList.contains('nav-open')) {
    closeNav();
  }
});

function closeNav() {
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  siteNav.classList.remove('open');
  body.classList.remove('nav-open');
}
