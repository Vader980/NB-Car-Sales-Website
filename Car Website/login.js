// Get references to the email and password inputs and the login button
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("button_container");

// Listen for a click on the login button
loginButton.addEventListener("click", function(event) {
  event.preventDefault();

  // Get the values from the email and password inputs
  const email = emailInput.value;
  const password = passwordInput.value;

  // Use Firebase's signInWithEmailAndPassword method to sign in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      // If the sign-in was successful, open the car-management.html file
      window.location.href = "car-management.html";
    })
    .catch(function(error) {
      // If the sign-in was unsuccessful, show an error message
      const messageBox = document.getElementById("message-box");
      messageBox.innerHTML = "Error signing in: " + error.message;
      messageBox.style.display = "block";
    });
});
