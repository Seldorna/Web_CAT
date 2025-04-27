function validateContactForm() {
    const nameInput = document.getElementById("Name").value.trim();
    const passwordInput = document.getElementById("Password").value.trim();
    const errorMessagesDiv = document.getElementById("errorMessages");
  
    // Array to store error messages
    const errorMessages = [];
  
    // Validation checks
    if (nameInput === "") {
      errorMessages.push("Please enter your name.");
    }
  
    if (passwordInput === "") {
      errorMessages.push("Please enter a password.");
    } else if (passwordInput.length <= 5) {
      errorMessages.push("The password should be longer than six characters.");
    }
  
    // Display error messages or clear the form
    if (errorMessages.length > 0) {
      errorMessagesDiv.innerHTML = errorMessages.join("<br>");
      return false; // Prevent form submission
    } else {
      document.getElementById("contactForm").reset(); // Clear the form
      errorMessagesDiv.innerHTML = ""; // Clear error messages
      return false; // Prevent actual form submission for demonstration purposes
    }
  }
  