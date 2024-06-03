
let arrow = document.getElementById('arrow');
let menu = document.getElementById('menu');
let visible = false;



types=['guest','client','conducteur','admine'];

let user={

    nom:'kadache',
    prenom:'ahmed rami',
    age:20,    
    type:types[1], 
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
'../../Profile/pass.html',
'notready.html',
'notready.html',
'notready.html',
'notready.html'
];
let driver_pagelist=[
'notready.html',
'notready.html',
'../../Profile/pass.html',
'notready.html',
'notready.html'
]
client_pagelist=[

'notready.html',
'notready.html',
'../../Profile/pass.html',
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
document.addEventListener('DOMContentLoaded', function() {
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');
  const btn5 = document.getElementById('btn5');
  const btn6 = document.getElementById('btn6');
  const btn7 = document.getElementById('btn7');
  const btn8 = document.getElementById('btn8');
  const btn9 = document.getElementById('btn9');

  // Fonction pour réinitialiser la couleur de fond de tous les boutons
  function resetButtons() {
    btn1.style.backgroundColor = '#ffffff';
    btn2.style.backgroundColor = '#ffffff';
    btn3.style.backgroundColor = '#ffffff';
    btn4.style.backgroundColor = '#ffffff';
    btn5.style.backgroundColor = '#ffffff';
    btn6.style.backgroundColor = '#ffffff';
    btn7.style.backgroundColor = '#ffffff';
    btn8.style.backgroundColor = '#ffffff';
    btn9.style.backgroundColor = '#ffffff';
  }

  // Initialiser la couleur de fond du premier bouton
  btn3.style.backgroundColor = '#0082AE';

  btn1.addEventListener('click', function() {
    resetButtons();
    this.style.backgroundColor = '#0082AE';
    window.location.href = '../pub1/pass.html'; 
  });

  btn2.addEventListener('click', function() {
    resetButtons();
    this.style.backgroundColor = '#0082AE';
    window.location.href = '../pub2/pass.html'; 
  });

  btn3.addEventListener('click', function() {
    resetButtons();
    this.style.backgroundColor = '#0082AE';
  });

 
});


const precedentButton = document.getElementById('prec');
const prochaineButton = document.getElementById('suiv');

// Add event listener to the "precedent" button
precedentButton.addEventListener('click', function() {
    // Navigate to the previous page
    window.history.back();
});



function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  const queries = queryString.split("&");
  queries.forEach(function(query) {
      const [key, value] = query.split("=");
      params[key] = decodeURIComponent(value);
  });
  return params;
}

const queryParams = getQueryParams();
const wilaya = queryParams['wilaya'];


const input = document.getElementById('input1');
const suggestBox = document.getElementById('suggest1');
 
  const suggestions = suggestBox.querySelectorAll('.wilaya');
  
  prochaineButton.addEventListener('click', function() {
    const validWilayas = Array.from(suggestions).map(s => s.textContent);
    const inputValue = input.value.trim();
    if(inputValue == wilaya)
    {
      alert('cant go to the same place');
    }
    else{
      if (validWilayas.includes(inputValue)) {
        window.location.href = '../pub4/pass.html';
    } else {
        alert('Please select a valid Wilaya from the suggestions.');
    }
    }
   
});



let sug1 = document.getElementById('suggest1');
let in1 = document.getElementById('input1');


in1.addEventListener('click',function(){

  sug1.style.display='flex';

})


function slect(){
  let op1 = document.querySelectorAll('.wilaya');
  op1.forEach(function(event) {
      event.addEventListener('click', function() {
          
           in1.value = event.innerText;
          sug1.style.display='none';
       
          
    
          
      });
  });
  
  
}
slect();



document.addEventListener('click', function(event) {
 
  let isClickInside = in1.contains(event.target);
  let isClickInside1 = sug1.contains(event.target);


  if(!isClickInside && !isClickInside1){
      sug1.style.display='none';
  }
});



const input1 = document.getElementById('input1');

const suggest1 = document.getElementById('suggest1');


const wilayas = Array.from(suggest1.querySelectorAll('.wilaya'));

input1.addEventListener('input', function() {
  const inputValue = input1.value.toLowerCase();
  const matchedWilayas = wilayas.filter(function(wilaya) {
      return wilaya.textContent.toLowerCase().startsWith(inputValue);
  });

  // Clear previous suggestions
  suggest1.innerHTML = '';

  // Append matched wilayas to suggestion container
  matchedWilayas.forEach(function(matchedWilaya) {
      suggest1.appendChild(matchedWilaya.cloneNode(true));
  });

  slect();
});
