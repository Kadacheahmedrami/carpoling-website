document.getElementById('accueilBtn').addEventListener('click', function() {
    // Redirect to the homepage or perform other actions
     window.location.href = '../../homepage/pass.html';
});


document.getElementById('backBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.history.back(); // Go back to the previous page
});