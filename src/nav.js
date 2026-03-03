// src/nav.js
const navToggleBtn = document.getElementById('navToggleBtn');
const navCloseBtn = document.getElementById('navCloseBtn');
const mobileNav = document.getElementById('mobileNav');
const navOverlay = document.getElementById('navOverlay');

function openNav() {

  mobileNav.classList.remove('translate-x-full');

  navOverlay.classList.remove('opacity-0', 'pointer-events-none');

}

function closeNav() {

  mobileNav.classList.add('translate-x-full');

  navOverlay.classList.add('opacity-0', 'pointer-events-none');

}

navToggleBtn.addEventListener('click', openNav);

navCloseBtn.addEventListener('click', closeNav);

navOverlay.addEventListener('click', closeNav);
// Nav size change
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    const navInner = document.getElementById('navInner');
    const logoImg = document.getElementById('logoImg');

    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      navInner.classList.replace('h-24', 'h-12');
      logoImg.classList.replace('h-20', 'h-8');
    } else {
      header.classList.remove('scrolled');
      navInner.classList.replace('h-12', 'h-24');
      logoImg.classList.replace('h-8', 'h-20');
    }
  });
