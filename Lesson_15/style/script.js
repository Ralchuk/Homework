// Select the button by its ID
const button = document.getElementById('form__btn');

// Attach a click event listener to the button
button.addEventListener('click', function() {
    // Change the button text when clicked
    button.textContent = "Clicked!";
});