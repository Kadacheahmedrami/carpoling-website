document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('resetPasswordForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      // Passwords match, you can proceed with form submission
      alert('Passwords matched. Ready to submit!');
      // Here you can add code to submit the form using AJAX or any other method
      // For example: form.submit();
    }
  });
});
