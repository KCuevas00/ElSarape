
// Header scroll detection for glassmorphism effect
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

if (mobileNavClose && mobileNav) {
  mobileNavClose.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  });
}

// Close mobile nav when clicking a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNav) {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Close mobile nav when clicking outside
if (mobileNav) {
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Dynamic copyright year
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
  footerYear.innerHTML = `&copy; ${new Date().getFullYear()} El Sarape. All rights reserved.`;
}
