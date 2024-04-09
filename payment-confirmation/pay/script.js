        var inputs = document.querySelectorAll('input');

        // Function to check if all inputs are filled
        function checkInputs() {
            var allFilled = true;
            inputs.forEach(function(input) {
                if (input.value.trim() === '') {
                    allFilled = false;
                }
            });
            return allFilled;
        }

        // Function to handle form submission
        function handleSubmit(event) {
            event.preventDefault(); // Prevent form submission
            if (checkInputs()) {
                // All inputs are filled, navigate to a new page or perform other actions
                window.location.href = '../confirm/pass.html';
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        }

        // Add event listener to the submit button
        document.getElementById('submitButton').addEventListener('click', handleSubmit);
  