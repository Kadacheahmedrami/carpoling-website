genders = ['male','female'];
user={
   nom:"kadache ahmed rami",
   gender:genders[0],
   rate: 5,
   adresse: 'a_kadache@estin.dz',
   numero:657898547,
   Trajet:0, // nombre des trajets
   Emprunte:0,
   Avis:0,

}





let nom=document.getElementById('nom')
let rate=document.getElementById('rate');
let adresse=document.getElementById('adresse');
let numero = document.getElementById('numero');
let Trajet = document.getElementById('Trajet');
let Emprunte = document.getElementById('Emprunte');
let Avis = document.getElementById('Avis');
let pfp = document.getElementById('pfp');

nom.innerText=user.nom;
rate.innerText=user.rate;
adresse.innerText=adresse.innerText+user.adresse;
numero.innerText='+'+'213'+user.numero;
Trajet.innerText=user.Trajet;
Emprunte.innerText=user.Emprunte;
Avis.innerText=user.Avis;

if(user.gender === 'female')
{
 pfp.src ='pics/female.svg'   
}



let inform=document.getElementById('inform');
let data=document.getElementById('data');
let container1 =document.getElementById('container1');
let container3 =document.getElementById('container3');
let spacer=document.getElementById('spacer');




inform.addEventListener('click',function(){

adjust1.style.display='flex'
adjust.style.display='none';
num.style.display='none';
inform.style.backgroundColor='#E3F1F6';
inform.style.color='#2693AF';



container1.style.borderBottomRightRadius='0px';
container3.style.borderTopRightRadius='34px';
spacer.style.borderTopRightRadius='0px';
spacer.style.borderBottomRightRadius='34px';
data.style.backgroundColor='#0082AE';
data.style.color='white';

 
    inform.classList.add('slideFromRight');

})

data.addEventListener('click',function(){

    adjust1.style.display='none'
    adjust.style.display='flex';
    num.style.display='flex'
    inform.style.backgroundColor='#0082AE';
    inform.style.color='white';
    container1.style.borderBottomRightRadius='34px';
    container3.style.borderTopRightRadius='0px';

    spacer.style.borderTopRightRadius='34px';
    spacer.style.borderBottomRightRadius='0px';

    data.style.backgroundColor='#E3F1F6';
    data.style.color='#2693AF';

   
    data.classList.add('slideFromRight');
  
    })


    inform.addEventListener('animationend', function () {
        data.classList.remove('slideFromRight');
        inform.classList.remove('slideFromRight');
      });
  
      data.addEventListener('animationend', function () {
        data.classList.remove('slideFromRight');
        inform.classList.remove('slideFromRight');
      });