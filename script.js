document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Send form data to the server (you can customize this part with your preferred method)
  // For example, you can use fetch() or XMLHttpRequest to send the data to a backend server

  // Reset the form
  document.getElementById('contactForm').reset();
});
