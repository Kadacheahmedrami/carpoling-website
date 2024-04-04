const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');







registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    resetForm(document.querySelector('.sign-up form'));
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    resetForm(document.querySelector('.sign-in form'));
});




function resetForm(form) {
    const formFields = form.querySelectorAll('input');
    formFields.forEach(field => {
        field.value = '';
    });
}


const userTypeSelect = document.getElementById('userType');


userTypeSelect.addEventListener('click', () => {
  const selectedOption = userTypeSelect.options[userTypeSelect.selectedIndex];
  userTypeSelect.placeholder = selectedOption.text;
});


const birthDateInput = document.getElementById('birthDate');

birthDateInput.addEventListener('keydown', (event) => {
  // Autoriser uniquement les chiffres, "-", "/" et Backspace
  const allowedChars = /^[0-9\/-]$/;
  if (!allowedChars.test(event.key) && event.key !== 'Backspace') {
    event.preventDefault();
  }
});

// Ajout de la bibliothèque de validation de date (ex: date-fns)
const { isValidDate } = require('date-fns');

birthDateInput.addEventListener('blur', () => {
  const birthDate = birthDateInput.value;
  if (!isValidDate(birthDate)) {
    // Afficher un message d'erreur
    alert('Format de date incorrect');
  }
});

