// JavaScript to handle form submission (this is just a basic example)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Message sent! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);

    // Reset the form fields
    event.target.reset();
});
