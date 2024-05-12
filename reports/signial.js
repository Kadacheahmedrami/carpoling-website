

let tripList = [
    {
        driver: "John",
        date: "2023-05-15",
        passenger: "Alice",
        reason: "Non-respect des conditions de covoiturage"
    },
    {
        driver: "Emily",
        date: "2023-05-16",
        passenger: "Bob",
        reason: "Véhicule en mauvais état"
    },
    {
        driver: "Michael",
        date: "2023-05-17",
        passenger: "Charlie",
        reason: "Comportement dangereux du conducteur"
    },
    {
        driver: "Sophia",
        date: "2023-05-18",
        passenger: "David",
        reason: "Absence du conducteur au point de rendez-vous"
    },
    {
        driver: "Olivia",
        date: "2023-05-19",
        passenger: "Emma",
        reason: "Exigences imprévues pendant le trajet"
    },
    {
        driver: "John",
        date: "2023-05-15",
        passenger: "Alice",
        reason: "Non-respect des conditions de covoiturage"
    },
    {
        driver: "Emily",
        date: "2023-05-16",
        passenger: "Bob",
        reason: "Véhicule en mauvais état"
    },
    {
        driver: "Michael",
        date: "2023-05-17",
        passenger: "Charlie",
        reason: "Comportement dangereux du conducteur"
    },
    {
        driver: "Sophia",
        date: "2023-05-18",
        passenger: "David",
        reason: "Absence du conducteur au point de rendez-vous"
    },
    {
        driver: "Olivia",
        date: "2023-05-19",
        passenger: "Emma",
        reason: "Exigences imprévues pendant le trajet"
    },
    {
        driver: "John",
        date: "2023-05-15",
        passenger: "Alice",
        reason: "Non-respect des conditions de covoiturage"
    },
    {
        driver: "Emily",
        date: "2023-05-16",
        passenger: "Bob",
        reason: "Véhicule en mauvais état"
    },
    {
        driver: "Michael",
        date: "2023-05-17",
        passenger: "Charlie",
        reason: "Comportement dangereux du conducteur"
    },
    {
        driver: "Sophia",
        date: "2023-05-18",
        passenger: "David",
        reason: "Absence du conducteur au point de rendez-vous"
    },
    {
        driver: "Olivia",
        date: "2023-05-19",
        passenger: "Emma",
        reason: "Exigences imprévues pendant le trajet"
    },
    {
        driver: "John",
        date: "2023-05-15",
        passenger: "Alice",
        reason: "Non-respect des conditions de covoiturage"
    },
    {
        driver: "Emily",
        date: "2023-05-16",
        passenger: "Bob",
        reason: "Véhicule en mauvais état"
    },
    {
        driver: "Michael",
        date: "2023-05-17",
        passenger: "Charlie",
        reason: "Comportement dangereux du conducteur"
    },
    {
        driver: "Sophia",
        date: "2023-05-18",
        passenger: "David",
        reason: "Absence du conducteur au point de rendez-vous"
    },
    {
        driver: "Olivia",
        date: "2023-05-19",
        passenger: "Emma",
        reason: "Exigences imprévues pendant le trajet"
    }

];


function createTripRow(driver, date, passenger, reason) {
    // Create a new table row
    const row = document.createElement('tr');

    // Set the inner HTML content for each cell
    row.innerHTML = `
        <td class="psg">${driver}</td>
        <td class="date">${date}</td>
        <td class="passager">${passenger}</td>
        <td class="motif">${reason}</td>
        <td class="action">
            <button class="ban-btn">Bannir</button>
            <button class="ignore-btn">Ignorer</button>
        </td>
    `;

    // Return the created table row
    return row;
}
