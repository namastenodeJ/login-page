document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the email and password from input fields
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // For demonstration purposes, we will assume any non-empty email/password is valid
  if (email && password) {
    // Redirect to home page after successful login
    window.location.href = "home.html";
  } else {
    // Display error message if email or password is empty
    document.getElementById("error-message").textContent = "Please enter a valid email and password.";
  }
});
