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

(function () {
  const slides = document.querySelectorAll('.hero__bg-slide');
  const dots   = document.querySelectorAll('.hero__dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('hero__bg-slide--active');
    dots[current].classList.remove('hero__dot--active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('hero__bg-slide--active');
    dots[current].classList.add('hero__dot--active');
  }

  function next()  { goTo(current + 1); }
  function start() { timer = setInterval(next, 5000); }
  function stop()  { clearInterval(timer); }

  // Clic sur un dot : navigation manuelle, puis reprise automatique
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stop(); goTo(i); start(); });
  });

  start();
})();


/**AFD-3 : Section Plats**/

/**
   * filterPlats — filtre les cartes par catégorie
   * @param {HTMLElement} btn  - le bouton cliqué
   * @param {string}      cat  - catégorie cible ('tous' | 'entree' | 'plat' | 'dessert' | 'boisson')
   */
  function filterPlats(btn, cat) {
    // 1. Mettre à jour le bouton actif
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. Afficher / masquer les cartes avec ré-animation
    document.querySelectorAll('.plat-card').forEach((card, i) => {
      const match = cat === 'tous' || card.dataset.cat === cat;

      if (!match) {
        card.classList.add('plat-card--hidden');
        return;
      }

      card.classList.remove('plat-card--hidden');

      // Relancer l'animation fadeUp
      card.style.animation = 'none';
      card.style.opacity   = '0';
      card.offsetHeight;   // force reflow
      card.style.animation     = '';
      card.style.animationDelay = (i * 0.07) + 's';
    });
  }


/**AFD-4 : Section Services**/



/**AFD-5 : Section Galerie**/



/**AFD-6 : Section Réservation**/

document.getElementById('reservationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form       = e.target;
  const messageBox = document.getElementById('formMessage');

  const name   = document.getElementById('name').value.trim();
  const email  = document.getElementById('email').value.trim();
  const guests = parseInt(document.getElementById('guests').value, 10);

  if (name === '' || email === '' || isNaN(guests) || guests < 1) {
    showMessage(messageBox, 'Veuillez remplir correctement tous les champs.', 'danger');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showMessage(messageBox, 'Veuillez entrer un email valide.', 'warning');
    return;
  }

  showMessage(messageBox, 'Réservation envoyée avec succès !', 'success');
  form.reset();
});

function showMessage(box, text, type) {
  box.innerHTML = `<div class="alert alert-${type}" role="alert">${text}</div>`;
  setTimeout(() => { box.innerHTML = ''; }, 3000);
}

 /**AFD-7 : Section Contact**:



/**Footer**/
