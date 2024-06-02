


// Use the query parameters
const queryParams = getQueryParams();

document.addEventListener('DOMContentLoaded', (event) => {
    

   
});
let [date, time] = queryParams.dateEtheure.split(' à ');
Trajet={
    date: date,
    heure: time,
    depart: queryParams.departure,
    arrive:  queryParams.destination,
    passengers:  queryParams.passengers
}


let dt = document.getElementById("date");
let hr = document.getElementById("heure");
let dp = document.getElementById("depart");
let ar = document.getElementById("arrive");
let pass = document.getElementById("passagers");



dt.innerText=Trajet.date;
hr.innerText='à , '+Trajet.heure;
dp.innerText=Trajet.depart;
ar.innerText=Trajet.arrive;
if(Trajet.passengers==0)
{
    pass.innerText="Aucune passagers pour ce moment "
}
else{
    pass.innerText="nombre des passagers : "+Trajet.passengers;
}




function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        dateEtheure: params.get('dateEtheure'),
        departure: params.get('departure'),
        destination: params.get('destination'),
        passengers: params.get('passengers')
    };
}
