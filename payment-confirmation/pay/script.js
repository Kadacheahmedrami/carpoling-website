       
 var inputs = document.querySelectorAll('input');
    
 // Function to check if all inputs are filled
        function checkInputs() {
            var allFilled = true;
            inputs.forEach(function(input) {
                if (input.value === '') {
                    allFilled = false;
                }
            });
            return allFilled;
        }

        const form = document.querySelector('form');

        // Add an event listener for the form's submit event
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();
        });
       
        sub = document.getElementById('submitButton');
        
       sub.addEventListener('click', function(){
        
        console.log(checkInputs())
            if (checkInputs()) {
              
                window.location.href = '../confirm/pass.html';
            } 
        });
  