

function validateForm() {
  var username = document.forms[0].elements[0].value;
  var password = document.forms[0].elements[1].value;

  // Perform your form validation logic here

  if (username === "" || password === "") {
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please enter both username and password.";
    return false; // Prevent form submission
  }

  // Example validation checks
  if (username.length < 6) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
    errorMessage.textContent = "Username must be at least 6 characters long.";
    return false; // Prevent form submission
  }

  if (password.length < 8) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
    errorMessage.textContent = "Password must be at least 8 characters long.";
    return false; // Prevent form submission
  }

  // Additional validation checks and logic

  return true; // Allow form submission
}

