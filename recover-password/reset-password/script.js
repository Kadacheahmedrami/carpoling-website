document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const toggleConfirmPasswordBtn = document.getElementById('toggleConfirmPassword');
  const submitButton = document.getElementById('submitButton');
  const errorDiv = document.getElementById('passwordError');

  function togglePasswordVisibility(input, toggleBtn) {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    toggleBtn.textContent = type === 'password' ? '👁️' : '🙈';
  }

  togglePasswordBtn.addEventListener('click', function () {
    togglePasswordVisibility(passwordInput, togglePasswordBtn);
  });

  toggleConfirmPasswordBtn.addEventListener('click', function () {
    togglePasswordVisibility(confirmPasswordInput, toggleConfirmPasswordBtn);
  });

  function checkPasswordsMatch() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    const passwordRegex = /^(?=.*\d).{8,}$/; // At least 8 characters and one number

    if (password === '' || confirmPassword === '') {
      errorDiv.textContent = "Please fill in both passwords";
      passwordInput.style.borderColor = 'red';
      confirmPasswordInput.style.borderColor = 'red';
      submitButton.disabled = true;
    } else if (!password.match(passwordRegex)) {
      errorDiv.textContent = "Password should be at least 8 characters long and contain at least one number";
      passwordInput.style.borderColor = 'red';
      confirmPasswordInput.style.borderColor = '';
      submitButton.disabled = true;
    } else if (password !== confirmPassword) {
      errorDiv.textContent = "Passwords do not match";
      passwordInput.style.borderColor = 'red';
      confirmPasswordInput.style.borderColor = 'red';
      submitButton.disabled = true;
    } else {
      errorDiv.textContent = "";
      passwordInput.style.borderColor = '';
      confirmPasswordInput.style.borderColor = '';
      submitButton.disabled = false;
    
    
    
    }
  }

  passwordInput.addEventListener('input', function () {
    checkPasswordsMatch();
    if (errorDiv.textContent === "") {
      togglePasswordBtn.disabled = false;
    }
  });

  confirmPasswordInput.addEventListener('input', function () {
    checkPasswordsMatch();
    if (errorDiv.textContent === "") {
      toggleConfirmPasswordBtn.disabled = false;
    }
  });

  submitButton.addEventListener('click', function (event) {
    checkPasswordsMatch();
    event.preventDefault(); 
    if (errorDiv.textContent === "") 
    {
   
      window.open("../../sign_login/auth.html", "_self");
    }
  });
});
