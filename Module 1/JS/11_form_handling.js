const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Clear previous errors
  document.getElementById("errorName").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorEvent").textContent = "";

  // Get form values using form.elements
  const { userName, userEmail, eventSelect } = form.elements;

  let isValid = true;

  // Validate name (not empty)
  if (!userName.value.trim()) {
    document.getElementById("errorName").textContent = "Name is required.";
    isValid = false;
  }

  // Validate email (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userEmail.value.trim()) {
    document.getElementById("errorEmail").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(userEmail.value.trim())) {
    document.getElementById("errorEmail").textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate event selection
  if (!eventSelect.value) {
    document.getElementById("errorEvent").textContent = "Please select an event.";
    isValid = false;
  }

  if (isValid) {
    alert(`Thank you for registering, ${userName.value}! You signed up for: ${eventSelect.value}`);
    form.reset(); // Clear form inputs
  }
});
