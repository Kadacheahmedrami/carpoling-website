document.querySelectorAll('.carte').forEach(carte => {
    carte.addEventListener('click', function() {
        const dateEtheure = carte.childNodes[0].textContent;
        const departure = carte.childNodes[1].textContent;
        const destination = carte.childNodes[2].textContent;
        const passengers = carte.childNodes[7].textContent.split(': ')[1]; // Extract the number

        const queryParams = new URLSearchParams({
            dateEtheure: dateEtheure,
            departure: departure,
            destination: destination,
            passengers: passengers
        }).toString();

        window.location.href = `../plan/pass.html?${queryParams}`;
    });
});
