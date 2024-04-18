genders = ['male','female'];
user={
   nom:"kadache ahmed rami",
   gender:genders[0],
   rate: 5,
   adresse: 'a_kadache@estin.dz',
   numero:657898547,
   Trajet:0, // nombre des trajets
   Emprunte:0,
   Avis:0,

}






let nom=document.getElementById('nom')
let rate=document.getElementById('rate');

let pfp = document.getElementById('pfp');

nom.innerText=user.nom;
rate.innerText=user.rate;


if(user.gender === 'female')
{
 pfp.src ='pics/female.svg'   
}


document.getElementById("but1").addEventListener("click", function() {
  // Fetch all input elements
  var prenom = document.getElementById("prenom").value;
  var nom = document.getElementById("nom").value;
  var email = document.getElementById("email").value;
  var adresse = document.getElementById("adresse").value;
  var contact = document.getElementById("contact").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var password = document.getElementById("password").value;

  // Regular expressions for validation
  var nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/; // Allows letters and spaces, minimum 2 characters
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  var phoneRegex = /^\d{10,}$/; // Allows 10 or more digits (adjust as needed)
  var cityRegex = /^[a-zA-Z\s]{2,}$/; // Allows letters and spaces, minimum 2 characters
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // Password with min 6 characters, at least one uppercase letter, one lowercase letter, and one number

  // Function to validate inputs
  function validateInput(input, regex) {
    return regex.test(input);
  }

  // Validate each input
  var prenomValid = validateInput(prenom, nameRegex);
  var nomValid = validateInput(nom, nameRegex);
  var emailValid = validateInput(email, emailRegex);
  var adresseValid = validateInput(adresse, /.+/); // Any non-empty string
  var contactValid = validateInput(contact, phoneRegex);
  var cityValid = validateInput(city, cityRegex);
  var passwordValid = validateInput(password, passwordRegex);

  // Check if all inputs are correct
  if (prenomValid && nomValid && emailValid && adresseValid && contactValid && cityValid && passwordValid) {
    alert("All inputs are correct.");
  
  } else {
    let error = document.querySelectorAll('.error');
    let yes = document.querySelectorAll('.yes');
    if(!emailValid)
    {

      error[0].style.display="flex";
      yes[0].style.display="none"
    }
    else{
      yes[0].style.display="flex";
      error[0].style.display="none"
    }
   if(!passwordValid) 
   {
    error[1].style.display="flex";
      yes[1].style.display="none"
   }
   else{
    yes[1].style.display="flex";
      error[1].style.display="none"
   }
  }
});


document.getElementById("but0").addEventListener("click", function() {
window.history.back()

})