document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById('passwordInput');
  const submitButton = document.getElementById('timerButton');
  const errorMessage = document.getElementById('errorMessage');
  const pasteButton = document.getElementById('pasteButton');

  if (!passwordInput || !submitButton || !errorMessage || !pasteButton) {
    console.error('Error: One or more elements not found.');
    return; // Exit the function if elements are not found
  }

  passwordInput.addEventListener('input', function() {
    const inputValue = passwordInput.value.trim();

    if (inputValue.length === 6) {
      // youness here put the verfication code

      if (inputValue === "testin") {
       
        window.location.href = '../reset-password/pass.html';
      } else {
        // Show error message and clear the input field
        errorMessage.textContent = 'Error: Incorrect Verification code';
        passwordInput.value = ''; // Clear the input field
      }
    } else {
      errorMessage.textContent = ''; // Clear error message if input length is not 6
    }
  });




  // Click event for pasteButton
  pasteButton.addEventListener('click', function() {
    navigator.clipboard.readText()
      .then(clipText => {
        // Check if clipboard text is equal to 6 characters
        if (clipText.length == 6) {
          passwordInput.value = clipText.substr(0, 6); // Paste the first 6 characters from clipboard
          
          // Check if pasted text matches "testin"
          if (passwordInput.value === "testin") {
            // Redirect to the reset-password page
            window.location.href = '../reset-password/pass.html';
          } else {
            // Show error message
            errorMessage.textContent = 'Error: Incorrect Verification code';
          }
        } else {
          errorMessage.textContent ='u have to enter 6 caracters';
        }
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
      });
  });
});










document.addEventListener("DOMContentLoaded", function() {
  const timerButton = document.getElementById('timerButton');
  const timerLine = document.getElementById('timerLine');
  const countdown = document.getElementById('countdown');

  let timer;
  let lineLength = 260;
  let secondsLeft = 15;
 // Initially hide the line and countdown
 timerLine.style.width = '0';
 countdown.style.display = 'none';

  timerButton.addEventListener('click', function() {
    // Reset the line length and seconds left
    timerButton.disabled = true;
    lineLength = 260;
    secondsLeft = 15;
    timerLine.style.width = lineLength + '%';
    countdown.textContent = secondsLeft;

    // Show the line
    timerLine.style.display = 'block';
    countdown.style.display = 'block';

    const duration = 15; // 15 seconds

    // Start the timer
    timer = setInterval(function() {
      lineLength -= (260 / duration);
      timerLine.style.width = lineLength + '%';

      // Update countdown
      secondsLeft--;
      countdown.textContent = secondsLeft;

      // Check if timer is finished
      if (lineLength <= 0) {
        clearInterval(timer);
        timerButton.disabled = false;
        timerLine.style.display = 'none'; // Hide the line
        countdown.style.display = 'none'; // Hide the countdown
      }
    }, 1000); // Update every 1 second
  });
});

