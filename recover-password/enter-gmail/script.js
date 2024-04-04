
function validateEmail(email) {
 
  var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
 
  return pattern.test(email);
}


document.getElementById("enter-gmail").addEventListener("click", function(event) {
 
  
  event.preventDefault();
  var emailInput = document.getElementById("passwordInput").value.trim();

  const submitButton = document.getElementById('enter-gmail');

  var errorMessage = document.getElementById("errorMessage");


  if (validateEmail(emailInput)) {
  
    window.open("../Confirmation-Code/pass.html", "_self");
  
  } else {
   
    
    errorMessage.textContent = "Please enter a valid Gmail address.";
  }
});


