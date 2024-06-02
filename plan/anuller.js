


let confirmationContainer = document.querySelector('.container');

const ouiButton = document.querySelector('.oui');
let blurBackground = document.getElementById('blur-background');
let cancelButton = document.querySelector('.Annuler');

let anuller = 0;


    document.getElementById("anuller").addEventListener('click', () => {
        if(anuller === 0)
        {  
            confirmationContainer.style.display = 'flex';
        blurBackground.style.display = 'block';
        console.log(anuller)
      
            ouiButton.addEventListener('click', function() {
            
    
         
            console.log("anuller")
            confirmationContainer.style.display = 'none';
             blurBackground.style.display = 'none';
             anuller=1;
        });
    
        cancelButton.addEventListener('click', function() {
            confirmationContainer.style.display = 'none';
            blurBackground.style.display = 'none';
        });}
      
        else{
            alert("vous avez deja anuller la reservation")
        }
    });

