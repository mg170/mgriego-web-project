const form = document.getElementById('displayName');
const display = document.getElementById('displayUserName');

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const nameValue = document.getElementById('userName').value;

    display.textContent = `Welcome to the club ${nameValue}!`;
    });
