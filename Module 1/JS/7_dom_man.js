// Sample events array
const events = [
  { id: 1, name: "Community Cleanup Day", date: "2025-06-15", availableSeats: 3 },
  { id: 2, name: "Neighborhood Block Party", date: "2025-11-20", availableSeats: 0 },
  { id: 3, name: "Charity Marathon", date: "2025-10-01", availableSeats: 10 },
];

// Get container where event cards will be displayed
const eventsContainer = document.querySelector("#events-container");

// Function to create and display event cards
function renderEvents() {
  // Clear existing content
  eventsContainer.innerHTML = "";

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Available Seats: <span class="seats">${event.availableSeats}</span></p>
    `;

    // Register button (disabled if no seats)
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.availableSeats === 0;

    registerBtn.addEventListener("click", () => {
      if (event.availableSeats > 0) {
        event.availableSeats--;
        // Update seats display
        card.querySelector(".seats").textContent = event.availableSeats;

        if (event.availableSeats === 0) {
          registerBtn.disabled = true;
        }
        alert(`Registered for ${event.name}! Seats left: ${event.availableSeats}`);
      }
    });

    card.appendChild(registerBtn);
    eventsContainer.appendChild(card);
  });
}

// Initial render
renderEvents();
