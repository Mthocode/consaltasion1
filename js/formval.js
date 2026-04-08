document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("numbers");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    let errors = [];

    // Clear previous errors
    clearErrors();

    // Name validation
    if (name.value.trim().length < 3) {
      showError(name, "Name must be at least 3 characters");
      errors.push("name");
    }

    // Email validation
    if (!validateEmail(email.value)) {
      showError(email, "Enter a valid email address");
      errors.push("email");
    }

    // Phone validation (optional but must be valid if filled)
    if (phone.value.trim() !== "" && !validatePhone(phone.value)) {
      showError(phone, "Enter a valid phone number");
      errors.push("phone");
    }

    // Message validation
    if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters");
      errors.push("message");
    }

    // Stop form if errors exist
    if (errors.length > 0) {
      e.preventDefault();
    }
  });

  // Helper: Email regex
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Helper: Phone regex (supports SA numbers)
  function validatePhone(phone) {
    return /^[0-9+\s()-]{7,15}$/.test(phone);
  }

  // Show error
  function showError(input, message) {
    const error = document.createElement("small");
    error.classList.add("error-message");
    error.innerText = message;

    input.classList.add("error");
    input.parentElement.appendChild(error);
  }

  // Clear errors
  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.remove());
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
  }

  [name, email, phone, message].forEach(input => {
    input.addEventListener("input", () => {
        input.classList.remove("error");
        const next = input.parentElement.querySelector(".error-message");
        if (next) next.remove();
    });
    });
});

