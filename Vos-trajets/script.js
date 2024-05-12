




function createCarteElement(date, departure, destination) {
    // Create the main div with class "carte"
    const carteDiv = document.createElement('div');
    carteDiv.classList.add('carte');

    // Create and append the departure date div
    const departDiv = document.createElement('div');
    departDiv.classList.add('depart2');
    departDiv.textContent = date;
    carteDiv.appendChild(departDiv);

    // Create and append the departure place div
    const psgDiv = document.createElement('div');
    psgDiv.classList.add('psg2');
    psgDiv.textContent = departure;
    carteDiv.appendChild(psgDiv);

    // Create and append the destination place div
    const ogcDiv = document.createElement('div');
    ogcDiv.classList.add('ogc2');
    ogcDiv.textContent = destination;
    carteDiv.appendChild(ogcDiv);

    // Create and append the vertical bar div
    const verticalBarDiv = document.createElement('div');
    verticalBarDiv.classList.add('vertical-bar2');
    carteDiv.appendChild(verticalBarDiv);

    // Create and append the departure icon div
    const allo3Div = document.createElement('div');
    allo3Div.classList.add('allo3');
    const img1 = document.createElement('img');
    img1.src = 'pics/carbon-location-filled.png';
    allo3Div.appendChild(img1);
    carteDiv.appendChild(allo3Div);

    // Create and append the destination icon div
    const allo4Div = document.createElement('div');
    allo4Div.classList.add('allo4');
    const img2 = document.createElement('img');
    img2.src = 'pics/carbon-location-filled.png';
    allo4Div.appendChild(img2);
    carteDiv.appendChild(allo4Div);

    // Create and append the emoji div
    const emojieDiv = document.createElement('div');
    emojieDiv.classList.add('emojie');
    const img3 = document.createElement('img');
    img3.src = 'pics/way 1.svg';
    emojieDiv.appendChild(img3);
    carteDiv.appendChild(emojieDiv);

    // Return the created carte div
    return carteDiv;
}


// Function to fill the Trajet div
function fillTrajetDiv(trajetsArray) {
    // Get the Trajet div
    const trajetDiv = document.querySelector('.Trajet');

    // Loop through the array of objects
    trajetsArray.forEach(trajet => {
        // Create a div using the createCarteElement function
        const carteElement = createCarteElement(trajet.date, trajet.departure, trajet.destination);

        // Append the created div to the Trajet div
        trajetDiv.appendChild(carteElement);
    });
}

// Call the function to fill the Trajet div with the array of objects
fillTrajetDiv(trajets);


let carts = document.querySelectorAll('.carte')

carts.forEach(cart=>{

cart.addEventListener('click',function(){
    window.location.href="../plan/pages/planDeRoute.html";
})

});
