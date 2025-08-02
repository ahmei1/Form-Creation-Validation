document.addEventListener("DOMContentLoaded", function () {
  // 1. Select form and feedback div
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // 2. Add form submit event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default form submission

    // 3. Get and trim input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // 4. Initialize validation
    let isValid = true;
    const messages = [];

    // 5. Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // 6. Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // 7. Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // 8. Show feedback
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // red
    }
  });
});
