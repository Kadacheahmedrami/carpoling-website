
const notifications_for_client = [
    { name: 'client 1', info: 'client 1 has canceled the trajet' , gender:"male"  ,rating : 1 , signialer:0},
    { name: 'client 2', info: 'client 2 has reserverd the trajet', gender:"male"  ,rating : 0 , signialer:0},
    { name: 'client 3', info: 'client 3 has canceled the trajet' , gender:"female"  ,rating : 1, signialer:0},
    { name: 'client 4', info: 'client 4 has reserved the trajet' , gender:"male"  ,rating : 0 , signialer:0},
    { name: 'client 5', info: 'client 5 has canceled the trajet' , gender:"female"  ,rating : 1 , signialer:0},
    { name: 'client 6', info: 'client 6 has canceled the trajet' , gender:"male"  ,rating : 1 , signialer:0}
  ];


// rating = 0 ==> reservation
// rating = 1 ==> canceled











function createNotifications_for_client(notifications_for_client) {
    const listContainer = document.getElementById('notificationList');

    notifications_for_client.forEach(notification => {
      const line = document.createElement('div');
      line.className = 'line';

      const not = document.createElement('div');
      not.className = 'not';

      const big = document.createElement('div');
      big.className = 'big';



      const pic = document.createElement('div');
      if(notification.gender==="male"){
        pic.className = 'pic';
      }
    else{
        pic.className = 'pic1';
    }
  
      const data = document.createElement('div');
      data.className = 'data';

      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = notification.name;

      const info = document.createElement('div');
      info.className = 'info';
      info.textContent = notification.info;

      const rate = document.createElement('div');
    
      rate.id="rating";
      rate.style.display="none";
      rate.textContent = notification.rating;

      const gender = document.createElement('div');
    
      gender.id="gender";
      gender.style.display="none";
      gender.textContent = notification.gender;

      const sign = document.createElement('div');
      sign.id="signal";
      sign.style.display="none";
      sign.textContent = notification.signialer;

      if(notification.signialer==1){
        not.style.backgroundColor="red"
      }

      data.appendChild(name);
      data.appendChild(info);

   
      not.appendChild(pic);
      not.appendChild(data);
      not.appendChild(rate);
    
      not.appendChild(gender);
      not.appendChild(sign);
      big.appendChild(not);
      big.appendChild(line);
      
      listContainer.appendChild(big);
    });

    // Append final line
    const finalLine = document.createElement('div');
    finalLine.className = 'line';
   
  }


  createNotifications_for_client(notifications_for_client);


