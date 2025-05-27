// Sample events array (use const because we won't reassign the array itself)
const events = [
  { id: 1, name: "Community Cleanup Day", date: "2025-06-15", availableSeats: 3, category: "Volunteer" },
  { id: 2, name: "Neighborhood Block Party", date: "2025-11-20", availableSeats: 0, category: "Social" },
  { id: 3, name: "Charity Marathon", date: "2025-10-01", availableSeats: 10, category: "Sports" },
  { id: 4, name: "Baking Workshop", date: "2025-07-15", availableSeats: 5, category: "Workshop" },
];

// Function with default parameters and destructuring
function renderEvents(
  eventList = [],
  { containerId = "events-container" } = {}
) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  // Use spread operator to clone the array to avoid side effects
  const eventsCopy = [...eventList];

  eventsCopy.forEach(event => {
    // Destructure event properties
    const { name, date, availableSeats, category } = event;

    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${name}</h3>
      <p>Date: ${date}</p>
      <p>Category: ${category}</p>
      <p>Available Seats: <span class="seats">${availableSeats}</span></p>
    `;

    container.appendChild(card);
  });
}

// Usage example
renderEvents(events);
