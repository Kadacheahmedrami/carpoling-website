
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
'../stats/index.html',
'../reports/pass.html',
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

let notElements = document.querySelectorAll(".not");

    notElements.forEach(n => {
      n.addEventListener("click", function() {
        let name =n.childNodes[1].childNodes[0].innerText;
        let rate= n.childNodes[2].innerText;
        let gender= n.childNodes[3].innerText
         let signal= n.childNodes[4].innerText
        
        let mn = document.getElementsByClassName("main")
        mn[0].style.width="100%";
        mn[0].style.transform = 'translateX(0%)';

        
        notElements.forEach(el => {
            let signal1= el.childNodes[4].innerText
          el.style.backgroundColor = "#E3F1F6";
          el.style.color="black"; 
          el.childNodes[0].style.borderRadius="30px"

          if(signal1==1){
            el.style.backgroundColor="red";
            
        }
          
        });
        n.style.backgroundColor = "#0082AE"; 
        n.style.color="white";
        n.childNodes[0].style.borderRadius="100px";
      
       
      
        document.getElementById("name-focus").innerText=name
        let stars =rate+' stars';
        document.getElementById("stars").innerText=stars;
        
        stars =roundStarRating();
        updateStars(stars)
       
        if(gender === "female")
        {
            document.getElementById("leftbar").childNodes[1].childNodes[1].src="pics/female.svg"
         
           
        }
        else
        {
             document.getElementById("leftbar").childNodes[1].childNodes[1].src="pics/pfp.svg"
        }
        
        if(signal==1){
           
            document.getElementById("leftbar").childNodes[19].innerText="1" ;
        }else
        {
            document.getElementById("leftbar").childNodes[19].innerText="0" ; 
        }
    
      });
    });


    function roundStarRating() {
      
        const starElement = document.getElementById('stars');
  
       
        const starText = starElement.textContent;
  
     
        const starNumber = parseFloat(starText);
  
       
        const roundedStars = Math.round(starNumber);
  

      
  
    
  
        return roundedStars;
      }
   
     


      function updateStars(num){

        let txt="";
        let i = 0;
        while(i<5){
            if(i<num)
            {
                txt= txt+"★"
            }
            else{
                txt=txt+"☆"
            }

            i++;
        }
        let St = document.getElementById("star-num")
       
        St.innerText=txt;
     

      }

      document.getElementById("ign").addEventListener('click', () => {

    let banButtons = document.querySelectorAll('.ban-btn');


    let confirmationContainer = document.querySelector('.container');


   let blurBackground = document.getElementById('blur-background');
     
   

    let cancelButton = document.querySelector('.Annuler');

    document.querySelector(".ban").innerText="Suprimer";
    document.querySelector(".text1").innerText="Vous êtes sûr que vous voulez suprimer cette notification ?";



    confirmationContainer.style.display = 'flex';
   blurBackground.style.display = 'block';
    
        cancelButton.addEventListener('click', function() {
            confirmationContainer.style.display = 'none';
            blurBackground.style.display = 'none';
        });
  
        SupOrSig(confirmationContainer,blurBackground);
      

});

 
  let i = document.getElementById("count");




  document.getElementById("sig").addEventListener('click', () => {

if(i.innerText==0)
{




    let confirmationContainer = document.querySelector('.container');


   let blurBackground = document.getElementById('blur-background');
     
    const ouiButton = document.querySelector('.oui');

    let cancelButton = document.querySelector('.Annuler');

 

    document.querySelector(".ban").innerText="signialer";
    document.querySelector(".text1").innerText="Vous êtes sûr que vous voulez sigialer cette utulisateur ?";

    confirmationContainer.style.display = 'flex';
   blurBackground.style.display = 'block';
    
        cancelButton.addEventListener('click', function() {
            confirmationContainer.style.display = 'none';
            blurBackground.style.display = 'none';
        });

        SupOrSig(confirmationContainer,blurBackground);

}
else{
    alert("vous avez deja signialer")
}

});


function index(){

let list = document.querySelectorAll(".not")
let i=0;
while(i< list.length )
{
  
if(list[i].style.backgroundColor=="rgb(0, 130, 174)")
{
    return i;
}
i++;
}

}


function SupOrSig(confirmationContainer,blurBackground){
    const ouiButton = document.querySelector('.oui');
    ouiButton.addEventListener('click', function() {
        let i = document.getElementById("count");
        let inum = index();
       
        if(ouiButton.parentElement.parentElement.childNodes[1].innerText=="Suprimer")
        {
            console.log("deleting")
          
            let element =document.querySelectorAll('.big')[inum];
            if (element) {
                element.remove();
              }
            confirmationContainer.style.display = 'none';
            blurBackground.style.display = 'none';
        }
        else{
            if(ouiButton.parentElement.parentElement.childNodes[1].innerText=="signialer")
            {
             i.innerText= 1;
             let select = document.querySelectorAll(".not")[inum]
           
             select.childNodes[4].innerText=1;
                  
              
              confirmationContainer.style.display = 'none';
               blurBackground.style.display = 'none';
            }
        }
      
            
        
       
       
    
    });

}






