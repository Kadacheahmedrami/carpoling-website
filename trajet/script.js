
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


if( user.type==types[1])
{
    pub.style.display='none';
    auth.style.marginLeft='auto';
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


let jour= document.getElementById('jour');
let nb= document.getElementById('nb');
let month= document.getElementById('month');
let depart_date= document.getElementById('depart-date');
let depart_place= document.getElementById('depart-place');
let arrive_date= document.getElementById('arrive-date');
let arrive_place= document.getElementById('arrive-place');
let driver_name= document.getElementById('name');
let prix=document.getElementById('Prix')
let rate= document.getElementById('rate');
let avis= document.getElementById('avis');



jour.innerText=trajet.jour;
nb.innerText=trajet.day;
month.innerText=trajet.month;

depart_date.innerText=trajet.depart[0];
depart_place.innerText=trajet.depart[1];
arrive_date.innerText=trajet.Arrivé[0];
arrive_place.innerText=trajet.Arrivé[1];

driver_name.innerText=driver.nom +' '+driver.prenom;
prix.innerText=trajet.prix+' da';
rate.innerText=driver.rate+'/5';
avis.innerText='-'+' '+driver.avis+'  '+'avis';






















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


let i=1
let length = document.getElementById("lengh");
let plus = document.getElementById("more")
let minuss = document.getElementById("less")
let place =  document.getElementById('pc');
let disp = document.getElementById("disponible");


place.innerText=i;

plus.addEventListener('click' , function(){

    if( i < disp.innerText)
    {
    i++;
    updater();
    }
});

minuss.addEventListener('click' , function(){

    if( i > 0)
    {
    i--;
    updater();
    }
});

function updater(){
    let x = 5 - disp.innerText + i

    if(x==1)
    {

        length.style.width='21%';
    }
    else
    {
        length.style.width=x*20+'%';
    }
    place.innerText=i;
}

updater()


let errir = document.getElementById("error");
let look = document.getElementById("look")
look.addEventListener('click',function(){

    if( i== 0)
    {
        error.innerText='il faut reserver aux minimum une seulle place'
    }
    else{
        window.location.href='../payment-confirmation/pay/pass.html'
    }
})

let sig = document.getElementById("sig");
let cnt = document.getElementById('cnt')
let content = document.getElementById('content')

let reason ="not yet";
signialer = document.getElementById('sign')
err = document.getElementById("err")

let btn1 = document.getElementsByClassName("btn1");
let btn2 = document.getElementsByClassName("btn2");
let btn3 = document.getElementsByClassName("btn3");
let btn4 = document.getElementsByClassName("btn4");
let btn5 = document.getElementsByClassName("btn5");
let btn6 = document.getElementsByClassName("btn6");





        
    sig.addEventListener("click",function(){
       
        if(reason === "not yet")
        {
        cnt.style.display='flex'
    content.style.filter='blur(5px)';
        }
        else
        {
            error.innerText= "vous avez dija signialer cette conducteur"
        }
    })






document.addEventListener('click', function(event) {
   
    let isClickInside = cnt.contains(event.target);
    let isClickInside1 = sig.contains(event.target);
    
  

    if(!isClickInside && !isClickInside1 ) 
    {
            cnt.style.display = 'none';  
            content.style.filter='none';
    }

});





 
btn1[0].addEventListener('click',function(){
    btn1[0].style.backgroundColor="red"
    btn1[0].style.color="white"


    btn2[0].style.backgroundColor="white"
    btn2[0].style.color="black"
    btn3[0].style.backgroundColor="white"
    btn3[0].style.color="black"
    btn4[0].style.backgroundColor="white"
    btn4[0].style.color="black"
    btn5[0].style.backgroundColor="white"
    btn5[0].style.color="black"
    btn6[0].style.backgroundColor="white"
    btn6[0].style.color="black"
   
})


 
btn2[0].addEventListener('click',function(){
    btn2[0].style.backgroundColor="red"
    btn2[0].style.color="white"


    btn1[0].style.backgroundColor="white"
    btn1[0].style.color="black"
    btn3[0].style.backgroundColor="white"
    btn3[0].style.color="black"
    btn4[0].style.backgroundColor="white"
    btn4[0].style.color="black"
    btn5[0].style.backgroundColor="white"
    btn5[0].style.color="black"
    btn6[0].style.backgroundColor="white"
    btn6[0].style.color="black"
   
})

 
btn6[0].addEventListener('click',function(){
    btn6[0].style.backgroundColor="red"
    btn6[0].style.color="white"


    btn2[0].style.backgroundColor="white"
    btn2[0].style.color="black"
    btn3[0].style.backgroundColor="white"
    btn3[0].style.color="black"
    btn4[0].style.backgroundColor="white"
    btn4[0].style.color="black"
    btn5[0].style.backgroundColor="white"
    btn5[0].style.color="black"
    btn1[0].style.backgroundColor="white"
    btn1[0].style.color="black"
   
})

 
btn3[0].addEventListener('click',function(){
    btn3[0].style.backgroundColor="red"
    btn3[0].style.color="white"


    btn2[0].style.backgroundColor="white"
    btn2[0].style.color="black"
    btn1[0].style.backgroundColor="white"
    btn1[0].style.color="black"
    btn4[0].style.backgroundColor="white"
    btn4[0].style.color="black"
    btn5[0].style.backgroundColor="white"
    btn5[0].style.color="black"
    btn6[0].style.backgroundColor="white"
    btn6[0].style.color="black"
   
})

 
btn4[0].addEventListener('click',function(){
    btn4[0].style.backgroundColor="red"
    btn4[0].style.color="white"


    btn2[0].style.backgroundColor="white"
    btn2[0].style.color="black"
    btn3[0].style.backgroundColor="white"
    btn3[0].style.color="black"
    btn1[0].style.backgroundColor="white"
    btn1[0].style.color="black"
    btn5[0].style.backgroundColor="white"
    btn5[0].style.color="black"
    btn6[0].style.backgroundColor="white"
    btn6[0].style.color="black"
   
})

 
btn5[0].addEventListener('click',function(){
    btn5[0].style.backgroundColor="red"
    btn5[0].style.color="white"


    btn2[0].style.backgroundColor="white"
    btn2[0].style.color="black"
    btn3[0].style.backgroundColor="white"
    btn3[0].style.color="black"
    btn4[0].style.backgroundColor="white"
    btn4[0].style.color="black"
    btn1[0].style.backgroundColor="white"
    btn1[0].style.color="black"
    btn6[0].style.backgroundColor="white"
    btn6[0].style.color="black"
   
})



signialer.addEventListener("click",function(){
    if(
        btn1[0].style.backgroundColor === 'red' || 
        btn2[0].style.backgroundColor==='red' || 
        btn3[0].style.backgroundColor==='red' || 
        btn4[0].style.backgroundColor==='red' || 
        btn5[0].style.backgroundColor==='red' ||
        btn6[0].style.backgroundColor==='red' 
    )
    {
        cnt.style.display = 'none';  
        content.style.filter='none'; 
        if(btn1[0].style.backgroundColor === 'red')
        {
            reason=" Non-respect des conditions de covoiturage"
        }
        else if ( btn2[0].style.backgroundColor==='red' )
        {
            reason=" Véhicule en mauvais état"
        }
        else if ( btn3[0].style.backgroundColor==='red' )
        {
            reason=" Comportement dangereux du conducteur"
        }
        else if ( btn4[0].style.backgroundColor==='red' )
        {
            reason=" Absence du conducteur au point de rendez-vous"
        }
        else if ( btn5[0].style.backgroundColor==='red' )
        {
            reason=" Exigences imprévues pendant le trajet"
        }
        else if ( btn6[0].style.backgroundColor==='red' )
        {
            reason=" Conflit conducteur-passager"
        }
        console.log(reason);

        
        // send 
    }
    else{
        err.style.display="flex"
        err.innerText="you have to select a reason";

        
    }
})
