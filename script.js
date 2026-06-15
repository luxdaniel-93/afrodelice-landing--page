
/**AFD-1 : Section Menu**/



/**AFD-2 : Section Bannière**/




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



/**AFD-7 : Section Contact**:



/**Footer**/

