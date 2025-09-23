// No dynamic behavior specified for home page, empty for now
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
