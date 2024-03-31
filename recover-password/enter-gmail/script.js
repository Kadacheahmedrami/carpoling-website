
function validateEmail(email) {
 
  var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
 
  return pattern.test(email);
}


document.getElementById("enter-gmail").addEventListener("click", function(event) {
 
  
 
  var emailInput = document.getElementById("passwordInput").value.trim();


  var errorMessage = document.getElementById("errorMessage");


  if (validateEmail(emailInput)) {
  
    errorMessage.textContent = "";
    
    console.log("Email is valid:", emailInput);
  } else {
    window.open('../Confirmation-Code/pass.html')
    errorMessage.textContent = "Please enter a valid Gmail address.";
  }
});
