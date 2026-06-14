/**AFD-1 : Section Menu**/
const header   = document.querySelector('header');
const menuBtn  = document.getElementById('menu-button');
const navMenu  = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');
const overlay  = document.getElementById('sidebar-overlay');


function handleScroll() {
  header.classList.toggle('is-scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

function openMenu() {
  menuBtn.classList.add('is-open');
  navMenu.classList.add('mobile-open');
  if (overlay) overlay.classList.add('is-open');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.setAttribute('aria-label', 'Fermer le menu');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuBtn.classList.remove('is-open');
  navMenu.classList.remove('mobile-open');
  if (overlay) overlay.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Ouvrir le menu');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.contains('is-open') ? closeMenu() : openMenu();
});


if (overlay) overlay.addEventListener('click', closeMenu);


navLinks.forEach(link => {
  link.addEventListener('click', () => closeMenu());
});

const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  let activeId = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      activeId = '#' + section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === activeId);
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();


window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});










/**AFD-2 : Section Bannière**/














/**AFD-3 : Section Plats**/












 /**AFD-4 : Section Services**/











/**AFD-5 : Section Galerie**/


















 /**AFD-6 : Section Réservation**/









 /**AFD-7 : Section Contact**:













/**Footer**/
