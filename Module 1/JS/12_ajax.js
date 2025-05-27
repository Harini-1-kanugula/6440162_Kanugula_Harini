const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous errors
  document.getElementById("errorName").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorEvent").textContent = "";
  const statusMessage = document.getElementById("statusMessage");
  if (statusMessage) statusMessage.remove();

  // Get form values
  const { userName, userEmail, eventSelect } = form.elements;

  let isValid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!userName.value.trim()) {
    document.getElementById("errorName").textContent = "Name is required.";
    isValid = false;
  }
  if (!userEmail.value.trim()) {
    document.getElementById("errorEmail").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(userEmail.value.trim())) {
    document.getElementById("errorEmail").textContent = "Please enter a valid email.";
    isValid = false;
  }
  if (!eventSelect.value) {
    document.getElementById("errorEvent").textContent = "Please select an event.";
    isValid = false;
  }

  if (!isValid) return;

  // Show loading status
  const loadingMsg = document.createElement("p");
  loadingMsg.id = "statusMessage";
  loadingMsg.textContent = "Sending registration...";
  loadingMsg.style.color = "blue";
  form.appendChild(loadingMsg);

  // Prepare data to send
  const registrationData = {
    name: userName.value.trim(),
    email: userEmail.value.trim(),
    event: eventSelect.value,
  };

  // Simulate network delay with setTimeout inside fetch mock
  fetch("https://mockapi.io/endpoint/registrations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationData),
  })
    .then(response => {
      // Simulate delay:
      return new Promise((resolve) => {
        setTimeout(() => resolve(response), 1500);
      });
    })
    .then(response => {
      if (!response.ok) throw new Error("Failed to submit registration");
      return response.json();
    })
    .then(data => {
      loadingMsg.textContent = "Registration successful! Thank you.";
      loadingMsg.style.color = "green";
      form.reset();
    })
    .catch(error => {
      loadingMsg.textContent = `Error: ${error.message}`;
      loadingMsg.style.color = "red";
    });
});
