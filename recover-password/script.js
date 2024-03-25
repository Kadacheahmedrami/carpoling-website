document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('forgotPasswordForm');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    // Here, you would typically send a request to your backend to handle the password reset
    // For this example, we'll just show a message
    messageDiv.innerHTML = 'Password reset link sent to ' + email;
    messageDiv.style.color = '#28a745'; // Green color for success message
    form.reset(); // Clear the form
  });
});

