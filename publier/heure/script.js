const urlParams = new URLSearchParams(window.location.search);
const DT = urlParams.get('param');





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

let clock =document.getElementById("clock");

let arr = document.getElementById('arr');
let white = document.getElementById('white');
let prix= document.getElementById("prix");  





let test = new Date;

let heure = test.getHours()
let minute = test.getMinutes()
console.log(heure+' : '+minute)

function suggest(hr)
{
    
    let hour= hr +2;
    let minite= 10;
    let content ;
    while(hour<24)
    {

        while(minite<60)
         {
        
            let newDiv = document.createElement("div");

            newDiv.classList.add("time-option");
            newDiv.id = "time-option";

            if(minite===0)
            {
                content=  hour +' : '+ '00' ;
            }
            else
            {
                content=  hour +' : '+ minite ;
            }
         
           newDiv.innerText=content;

            prix.appendChild(newDiv);
            
           
            minite=minite+10
         }
         hour++;
       minite=0;

     
    }
    

}


if (DT === test.getDate()+''+(test.getMonth()+1)+''+test.getFullYear())
{
 
    prix.innerHTML='';
    clock.value=heure+2+' : 00'
    suggest(heure);
}



let time = document.querySelectorAll('#time-option');




document.addEventListener('click', function(event) {
   
    let isClickInside = prix.contains(event.target);
    let isClickInside1 = clock.contains(event.target);
    let isClickInside2 = arr.contains(event.target);
  
    if(!isClickInside && !isClickInside1 && !isClickInside2) 
    {
       
            prix.style.display = 'none';
            white.style.display = 'flex';
            if( arr.style.rotate='180deg')
            {
                  arr.style.rotate ='0deg';
            }
    }

  

        
    
});




function clockmenu(){
  

        if( white.style.display == 'none'){
            prix.style.display='none'
            white.style.display = 'flex';
            arr.style.rotate ='0deg';
            clock.style.backgroundColor='white'
        }
        else
        {
            prix.style.display = 'flex';
            white.style.display = 'none';
            arr.style.rotate ='180deg';
            clock.style.backgroundColor='#E3F1F6'

        }
 
}

arr.addEventListener('click',function(){
       clockmenu()
       
})





time.forEach(function(event) {
    event.addEventListener('click', function() {
        clock.value = event.innerText;
       
        clockmenu()
    });
});










 // Get references to the buttons
const precedentButton = document.getElementById('precedent');
const prochaineButton = document.getElementById('prochaine');

// Add event listener to the "precedent" button
precedentButton.addEventListener('click', function() {
    // Navigate to the previous page
    window.history.back();
});

// Add event listener to the "prochaine" button
prochaineButton.addEventListener('click', function() {
    // Navigate to a new page
    window.location.href = '../people/pass.html'; // Replace 'new_page.html' with the URL of the new page
});





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
    btn6.style.backgroundColor = '#0082AE';
  
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
      window.location.href = '../pub3/pass.html'; 
    });
  
    btn4.addEventListener('click', function() {
      resetButtons();
      this.style.backgroundColor = '#0082AE';
      window.location.href = '../pub4/pass.html'; 
    });
  
        btn5.addEventListener('click', function() {
          resetButtons();
          this.style.backgroundColor = '#0082AE';
          window.location.href = '../calendaire/index.html'; 
        });
      
        btn6.addEventListener('click', function() {
          resetButtons();
          this.style.backgroundColor = '#0082AE';
        });
      
      
  });
  
  