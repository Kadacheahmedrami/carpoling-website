
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






function submitComment() {
    const commentInput = document.getElementById('comment-input');
    const ratingInput = document.getElementById('output');
    const commentsList = document.getElementById('comments-list');

    if (commentInput.value.trim() === '') {
        alert('Please write a comment.');
        return;
    }

    const commentText = commentInput.value;
    const rating = "★".repeat(parseInt(ratingInput.innerText));
    
    const leftovers = "★".repeat(parseInt(5-ratingInput.innerText));

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');


    const comment_writer = document.createElement('div');
    comment_writer.classList.add('user');
    comment_writer.textContent = user.nom + user.prenom;


    const commentTextDiv = document.createElement('div');
    commentTextDiv.classList.add('comment-text');
    commentTextDiv.textContent = commentText;

    const commentRatingDiv = document.createElement('div');
    commentRatingDiv.classList.add('comment-rating');
    commentRatingDiv.innerHTML = `Rating:  `;

    
    const star = document.createElement('div');
    star.classList.add('star1');
    star.innerHTML = ` ${rating} `;

    const left = document.createElement('div');
    left.classList.add('star2');
    left.innerHTML = ` ${leftovers} `;


    commentDiv.appendChild(comment_writer);
    commentDiv.appendChild(commentTextDiv);
    commentRatingDiv.appendChild(star);
    commentRatingDiv.appendChild(left);
    commentDiv.appendChild(commentRatingDiv);
    
    commentsList.appendChild(commentDiv);

    // Clear the input fields
    commentInput.value = '';
    ratingInput.value = '1';
}




let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = + n ;
}
 
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}






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


  let i = roundStarRating();
  updateStars(i)


let l = document.querySelector(".ret");
  l.addEventListener("click",function(){


    window.history.back();
  })