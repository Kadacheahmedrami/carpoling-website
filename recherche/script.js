
let arrow = document.getElementById('arrow');
let menu = document.getElementById('menu');
let visible = false;

let adjust1 = document.getElementById('adjust1')
let adjust2 = document.getElementById('adjust2')

types=['guest','client','conducteur','admine'];

let user={

    nom:'kadache',
    prenom:'ahmed rami',
    age:20,    
    type:types[1], 
}


if( user.type==types[1])
{
    pub.style.display='none'
    auth.style.marginLeft='auto'
}


let driver={
    nom:'mr',
    prenom:'Wallie',
    age:20,    
    type:types[2], 
    rate:6,
    avis:9,
}

let trajet={
day:7,
jour:"samedi",
month:"avril",
depart :["12:06","05, Batna - batna ville la garre de routierre"],  // date et la place de epart
Arrivé :["16:06","06, Bejaia - amizour l'ecole superieur d'informatique"], // date et la place de l'arrivé
max : 4,  // maximum des places
reserved_places:2, // les places reservé
places_disponible : 2 , 
prix: 1200,


}
























let admin_options=['vos trajet','Messages','Profile','Paiment','statistic','rapport','Deconxion'];
let driver_options=['vos trajet','Messages','Profile','Paiment','Deconxion'];
let client_options=['vos trajet','Messages','Profile','Deconxion'];
let guest_options=['log in','sign up'];


let admin_imglist=[
'pics/menu-icons/trajet.png',
'pics/menu-icons/message.png',
'pics/menu-icons/profile.png',
'pics/menu-icons/pay.svg',
'pics/menu-icons/statistic.png',
'pics/menu-icons/report.png',
'pics/menu-icons/log-out.png'
];
let driver_imglist=[
'pics/menu-icons/trajet.png',
'pics/menu-icons/message.png',
'pics/menu-icons/profile.png',
'pics/menu-icons/pay.svg',
'pics/menu-icons/log-out.png'
];
let client_imglist=[
'pics/menu-icons/trajet.png',
'pics/menu-icons/message.png',
'pics/menu-icons/profile.png',
'pics/menu-icons/log-out.png'
];
let guest_imglist=[
'pics/menu-icons/log.png',
'pics/menu-icons/sign.png',
];


let admin_pagelist=[
'notready.html',
'notready.html',
'../Profile/pass.html',
'notready.html',
'notready.html',
'notready.html',
'notready.html'
];
let driver_pagelist=[
'notready.html',
'notready.html',
'../Profile/pass.html',
'notready.html',
'notready.html'
]
client_pagelist=[

'notready.html',
'notready.html',
'../Profile/pass.html',
'notready.html'
]
guest_pagelist=[
'../sign_login/auth.html',
'../sign_login/auth.html'
]
    



parameterValue="sign";

// fonction pour ajouter un option
function addoption(content , img_src ,page){
    let element = document.createElement('a');
    if(page === '../sign_login/auth.html' && img_src === 'pics/menu-icons/sign.png' && user.type=== types[0])
    {
        page= page+'?param=';
        page= page+parameterValue;  
    }
    element.href = page;
    let Im = document.createElement('img');
    Im.src=img_src; 
    Im.classList.add("icon");
    
    let text = document.createElement('p');
    text.innerText= content;
    text.classList.add("text");
    
    let cot = document.createElement('p');
    cot.innerText= ">"
    cot.classList.add("cotation")
    
    element.appendChild(Im);
    element.appendChild(text);
    element.appendChild(cot);
    
    
    element.classList.add("option");
    
    menu.appendChild(element);
}



function addline(){
    let line = document.createElement('div');
    line.classList.add('line');
    menu.appendChild(line);
}





function create(options,imglist,pagelist)
{   
    let name = document.getElementById('user-name');
    let i=0;
    while (i<options.length-1)
    {   
       
        addoption(options[i],imglist[i],pagelist[i]);
        i++;
        addline() 
    }
    addoption(options[i],imglist[i],pagelist[i]);
    name.innerText=user.nom+' '+user.prenom;
}



switch(user.type){

    case types[0]: create(guest_options,guest_imglist,guest_pagelist); break;
    case types[1]: create(client_options,client_imglist,client_pagelist);break;
    case types[2]: create(driver_options,driver_imglist,driver_pagelist);break;
    case types[3]: create(admin_options,admin_imglist,admin_pagelist);break;

}














arrow.addEventListener('click',function(){

    if( !visible ){
        visible= !visible;
        menu.style.display = 'flex';
        arrow.style.rotate ='180deg';
    }
    else
    {
        visible= !visible;
        menu.style.display = 'none';
        arrow.style.rotate ='0deg';
    }
    

})







function getQueryParams() {
    var params = {};
    var queryString = window.location.search.substring(1);
    var pairs = queryString.split("&");
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
}

// Get the query parameters
var queryParams = getQueryParams();

// Access the parameter valuesif

var input1 = queryParams.input1;
var input2 = queryParams.input2;
var input3 = queryParams.input3;
var input4 = queryParams.input4;

let arslane = document.getElementById('arslane');

let input_1 = document.getElementById('input1');
let input_2 = document.getElementById('input2');
let input_3 = document.getElementById('input3');
let input_4 = document.getElementById('input4');

if(input1 !== undefined)
{
arslane.style.display='flex';
input_1.value=input1;
input_2.value=input2;
input_3.value=input3;
input_4.value=input4;

}








function createCard(depart_date,depart_place,prix,arrive_date,arrive_place,driver_name,rate,places) {
  const card = document.createElement('div');
  card.classList.add('card');
  let place = ''
  if(places === "1 places")
  {
    place = '1 place'
  }
  else
  {
    place= places;
  }
  card.innerHTML = `
      <div class="widget0">
          <p class="depart" id="depart-date">`+ depart_date+`</p>
          <img src="pics/pos.svg" class="pos1">
          <p class="depart" id="depart">`+ depart_place+`</p>
          <p class="prix" id="prix">`+ prix+`</p>
      </div>
      <div class="widget1">
          <p class="difrence" id="defrence">`+ '4:00' +`</p>
          <img src="pics/line.svg" class="line-img">
          <p class="places" id="places">`+ place +`</p>
      </div>
      <div class="widget0">

          <p class="depart" id="depart-date">`+ arrive_date+`</p>
          <img src="pics/pos.svg" class="pos1">
          <p class="depart" id="depart">`+ arrive_place+`</p>
      </div>
      <div class="line1"></div>
      <div class="widget0">
          <img src="pics/pfp.svg" class="driver-pfp">
          <p class="deiver" id="driver-name">`+ driver_name+`</p>
          <img src="pics/star.svg" class="star">
          <p class="rating" id="rating">`+ rate +`</p>
      </div>
  `;
  card.id = 'card';
  return card;

  
}




function createCard_s(depart_date,depart_place,prix,arrive_date,arrive_place,driver_name,rate,places) {

    const card = document.createElement('div');
    card.classList.add('card-s');
    let place = ''
    if(places === "1 places")
    {
      place = '1 place'
    }
    else
    {
      place= places;
    }
    card.innerHTML = `
        <div class="widget0">
            <p class="depart" id="depart-date">`+ depart_date+`</p>
            <img src="pics/pos.svg" class="pos1">
            <p class="depart" id="depart">`+ depart_place+`</p>
            <p class="prix" id="prix">`+ prix+`</p>
        </div>
        <div class="widget1">
            <p class="difrence" id="defrence">`+ '4:00' +`</p>
            <img src="pics/line.svg" class="line-img">
            <p class="places" id="places">`+ place +`</p>
        </div>
        <div class="widget0">
  
            <p class="depart" id="depart-date">`+ arrive_date+`</p>
            <img src="pics/pos.svg" class="pos1">
            <p class="depart" id="depart">`+ arrive_place+`</p>
        </div>
        <div class="line1"></div>
        <div class="widget0">
            <img src="pics/pfp.svg" class="driver-pfp">
            <p class="deiver" id="driver-name">`+ driver_name+`</p>
            <img src="pics/star.svg" class="star">
            <p class="rating" id="rating">`+ rate +`</p>
        </div>
    `;
    card.id = 'card';
    return card;
  
    
  }




  
  
function searchCards(date, departurePlace, arrivalPlace, availablePlaces) {
  return cardData.filter(card => {
      // Check if date matches
      if (date && card.date != date) return false;

      // Check if departure place matches
      if (departurePlace && card.departure.place != departurePlace) return false;

      // Check if arrival place matches
      if (arrivalPlace && card.arrival.place != arrivalPlace) return false;

      // Check if available places match
      if (availablePlaces && card.available_places != availablePlaces) return false;

      // If all criteria match, return true to keep the card in the filtered array
      return true;
  });
}



let filteredCards = [];



function show(){

  
  if (input_1.value === '' || input_2.value === '' || isNaN(input_3.value) || input_3.value < 1 || input_3.value > 5) 
  {
    return
  }
  filteredCards=searchCards(input_2.value,input_1.value,input_4.value,  input_3.value+" places");
   
  column2.style.display='none';
  filteredCards.forEach((data, index) => {
      const { departure, arrival, price, driver, available_places } = data;
      const card = createCard(
          departure.date,
          departure.place,
          price,
          arrival.date,
          arrival.place,
          driver.name,
          driver.rate,
          available_places
      );
    
      if (index % 2 === 0) {
        
          column1.appendChild(card);
      } else {
        column2.style.display='block';
          column2.appendChild(card);
      }
  });

     let cheapest = findCheapestCard(filteredCards);


    let mostComfortable = findMostComfortableCard(filteredCards);
    

    let cd1 = createCard_s(
    cheapest.departure.date,
    cheapest.departure.place,
    cheapest.price,
    cheapest.arrival.date,
    cheapest.arrival.place,
    cheapest.driver.name,
    cheapest.driver.rate,
    cheapest.available_places
    );
    let cd2 = createCard_s(
        mostComfortable.departure.date,
        mostComfortable.departure.place,
        mostComfortable.price,
        mostComfortable.arrival.date,
        mostComfortable.arrival.place,
        mostComfortable.driver.name,
        mostComfortable.driver.rate,
        mostComfortable.available_places
        );


    
     adjust1.appendChild(cd1);
     adjust2.appendChild(cd2);

  arslane.style.display="flex";
 
  



  var cards = document.querySelectorAll("#card");
 

  cards.forEach(function(element)
  {
  element.addEventListener('click',function(){


      window.location.href='../trajet/pass.html';


  });
  });
}










document.getElementById('look').addEventListener('click', function() {


    if (input_1.value === '' || input_2.value === '' || isNaN(input_3.value) || input_3.value < 1 || input_3.value > 5) {
        console.log(arslane);
        return;
    }

   show()
   


});




  show()


