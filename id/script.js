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

let pfp = document.getElementById('pfp');

nom.innerText=user.nom;
rate.innerText=user.rate;


if(user.gender === 'female')
{
 pfp.src ='pics/female.svg'   
}

document.getElementById("psg").addEventListener('click',function(){
   window.history.back();
})


