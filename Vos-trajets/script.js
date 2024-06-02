function createCarteElement(date, heure, departure, destination, passengers) {
    // Create the main div with class "carte"
    const carteDiv = document.createElement('div');
    carteDiv.classList.add('carte');

    // Create and append the departure date and time div
    const departDiv = document.createElement('div');
    departDiv.classList.add('depart2');
    departDiv.textContent = `${date} à ${heure}`;
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

    // Create and append the passengers div
    const passengersDiv = document.createElement('div');
    passengersDiv.classList.add('passengers');
    passengersDiv.textContent = `Passengers: ${passengers}`;
    passengersDiv.style.display = 'none'; // Make it invisible
    carteDiv.appendChild(passengersDiv);

    // Return the created carte div
    return carteDiv;
}

// Function to fill the Trajet divs
function fillTrajetDiv(trajetsArray) {
    const currentDate = new Date();

    // Get the Trajet divs
    const futureTrajetDiv = document.querySelector('.Trajet.futur');
    const pastTrajetDiv = document.querySelector('.Trajet.past');

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
  
    trajetsArray.forEach(trajet => {
        const [month, day, year] = trajet.date.split('-');

        const carteElement = createCarteElement(trajet.date, trajet.heure, trajet.departure, trajet.destination, trajet.passengers);

        // Append the created div to the appropriate Trajet div
        if (parseInt(year) >= parseInt(currentYear)) {
            if (parseInt(month) >= parseInt(currentMonth)) {
                if (parseInt(day) >= parseInt(currentDay)) {
                    futureTrajetDiv.appendChild(carteElement);
                } else {
                    pastTrajetDiv.appendChild(carteElement);
                }
            } else {
                pastTrajetDiv.appendChild(carteElement);
            }
        } else {
            pastTrajetDiv.appendChild(carteElement);
        }
    });
}



fillTrajetDiv(trajets);