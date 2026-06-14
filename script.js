document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('reservationForm');
  const messageBox = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let guests = parseInt(document.getElementById('guests').value, 10);

    // Vérification des champs
    if (name === "" || email === "" || isNaN(guests) || guests < 1) {
      showMessage("Veuillez remplir correctement tous les champs.", "danger");
      return;
    }

    // Vérification email avec regex simple
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showMessage("Veuillez entrer un email valide.", "warning");
      return;
    }

    showMessage("Réservation envoyée avec succès !", "success");
    form.reset(); // On va réinitialiser le formulaire après succès
  });

  function showMessage(text, type) {
    messageBox.innerHTML = `<div class="alert alert-${type}" role="alert">${text}</div>`;
    // On supprime le message après 3 secondes
    setTimeout(() => {
      messageBox.innerHTML = "";
    }, 3000);
  }
});
