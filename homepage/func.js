document.addEventListener('DOMContentLoaded', function() {
  const menuContainer = document.querySelector('.home--UNa .auto-group-pfcr-agW .menu-container');
  const arrow = document.querySelector('.home--UNa .auto-group-pfcr-agW .arrow');

  menuContainer.addEventListener('click', function() {
    const dropdownContent = this.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)'; // Rotate arrow to initial position
    } else {
      dropdownContent.style.display = 'block';
      arrow.style.transform = 'rotate(180deg)'; // Rotate arrow 180 degrees
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const carElement = document.querySelector(".voiture-musclee-1-c5C");

  carElement.addEventListener("click", function () {
    const windowWidth = window.innerWidth;
    const carWidth = carElement.offsetWidth;

    // Move to the left of the viewport
    carElement.style.left = `-${carWidth}px`;
    setTimeout(function () {
      
      carElement.style.opacity = `0`; 
    }, 1000);
    
    // After a delay, move the car to the right side of the viewport
    setTimeout(function () {
      
      carElement.style.left = `${windowWidth + 20}px`; // Move to the right
    }, 2000); // Change this value to match the transition duration

   
    
    // After another delay, move the car back to the initial position
    setTimeout(function () {
      carElement.style.opacity = `1`; 
      carElement.style.left = "133rem"; // Move back to the initial position
    
    }, 4000); // Change this value to match the transition duration * 2
  });
});

