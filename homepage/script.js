
let arrow = document.getElementById('arrow');
let menu = document.getElementById('menu');
let visible = false;



types=['guest','client','conducteur','admine'];

let user={

    nom:'Ziad',
    prenom:'Rafik',
    age:20,    
    type:types[3], 

}
let pub = document.getElementById("pub");
let rech = document.getElementById("rech");
if( user.type==types[1])
{
    pub.style.display='none'
}

if( user.type==types[0])
{
    pub.href="../inscr/pass.html";
    rech.href="../inscr/pass.html";
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
'../Vos-trajets/pass.html',
'notready.html',
'../Profile/pass.html',
'notready.html',
'notready.html',
'notready.html',
'notready.html'
];
let driver_pagelist=[
'../Vos-trajets/pass.html',
'notready.html',
'../Profile/pass.html',
'notready.html',
'notready.html'
]
client_pagelist=[
'../Vos-trajets/pass.html',
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








document.getElementById('look').addEventListener('click', function() {
    var input1 = document.getElementById('input1').value.trim();
    var input2 = document.getElementById('input2').value.trim();
    var input4 = document.getElementById('input4').value.trim();
    var input3 = parseInt(document.getElementById('input3').value);

    if (input1 === '' || input2 === '' || isNaN(input3) || input3 < 1 || input3 > 5 || input4 === '') {
        alert('Veuillez remplir tous les champs correctement.');
        return;
    }

    var parametre = [input1, input2, input3,input4];
    console.log('Paramètres:', parametre);

    var queryString = '?input1=' + encodeURIComponent(parametre[0]) + '&input2=' + encodeURIComponent(parametre[1]) + '&input3=' + encodeURIComponent(parametre[2])+'&input4=' + encodeURIComponent(parametre[3]);
    var nextPageURL = '../recherche/pass.html' + queryString;
    window.location.href = nextPageURL; // Redirect to pass.html with parameters
});


bugatti = document.getElementById('bugatti');
bugatti1 = document.getElementById('bugatti1');


// bugatti.addEventListener('click', function(){
//     bugatti.style.transform="translateX( -1920%)"
//     bugatti1.style.display='flex'

  
//     setTimeout(() => {
     
//         bugatti1.style.transform="translateX(0%)"

//     },1200);
//     setTimeout(() => {
        
//         bugatti.style.display='none'
//         bugatti.style.transform="translateX(100%)"
        
//     },2000);


// })


// bugatti1.addEventListener('click', function(){
//     bugatti1.style.transform="translateX( -1920%)"
//     bugatti.style.display='flex'

  
//     setTimeout(() => {
      
//         bugatti.style.transform="translateX(0%)"
   
//     },1200);

//     setTimeout(() => {
        
//     bugatti1.style.display='none'
//     bugatti1.style.transform="translateX(100%)"

//     },2000);
// })





document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("input2").min = new Date().toISOString().split("T")[0];
  });


function animate() {
  
    setTimeout(() => {
        
       
        bugatti.style.transform = "translateX(-2000%)";
        bugatti1.style.display = 'flex';
    }, 1200);
    setTimeout(() => {
        
        bugatti1.style.transform="translateX(0%)"
       
    }, 2000);
    setTimeout(() => {
        
        bugatti1.style.transform="translateX(0%)"
       
    }, 2000);
    setTimeout(() => {
        
        bugatti1.style.transform= "translateX(-2000%)";
        bugatti.style.display = 'none';
        bugatti.style.transform = "translateX(100%)";
       
    }, 4000);
    setTimeout(() => {
        
   
        bugatti.style.display = 'flex';
       
    }, 5000);
    setTimeout(() => {    
        bugatti1.style.transform= "translateX(100%)";
        bugatti.style.transform = "translateX(0%)";
        
    }, 5600);
    setTimeout(() => {    
     
        bugatti1.style.display= "none";
    }, 5605);
}

// Call the animate function every 4 seconds
setInterval(animate, 6000);


animate();



function animate1() {
     // Check if any of the subboxes are being hovered over
     const isHovered = document.querySelectorAll('.subbox0:hover').length > 0;
     const isHovered2 = document.querySelectorAll('.subbox1:hover').length > 0;
     const isHovered3 = document.querySelectorAll('.subbox2:hover').length > 0;

     // If any subbox is hovered, return and don't start the animation
     if (isHovered || isHovered2 || isHovered3 ) {
      



        return;
     }
 
     let suubox1 = document.getElementById('subbox1');
     let suubox2 = document.getElementById('subbox2');
     let suubox3 = document.getElementById('subbox3');
  
    setTimeout(() => {
     suubox1.style.transform="translateY(-20%)"
     suubox1.rotate="20deg"
    }, 0);
  
  
    setTimeout(() => {
        suubox2.style.transform="translateY(-20%)"
    }, 200);
    
    // Reset the hover effect after a certain duration
    setTimeout(() => {
        suubox3.style.transform="translateY(-20%)"
    }, 400);
    

    
    setTimeout(() => {
        suubox1.style.transform="translateY(0%)"
       }, 1000);
     
     
       setTimeout(() => {
           suubox2.style.transform="translateY(0%)"

       }, 1200);
       
       // Reset the hover effect after a certain duration
       setTimeout(() => {
           suubox3.style.transform="translateY(0%)"

       }, 1400);
  }
  
  // Initial call to start the animation
  
  animate1();
  
  // Repeat the animation every 2 seconds
  setInterval(animate1, 6000);
  