const events = [
  { id: 1, name: "Community Cleanup Day", date: "2025-06-15", availableSeats: 3, category: "Volunteer" },
  { id: 2, name: "Neighborhood Block Party", date: "2025-11-20", availableSeats: 0, category: "Social" },
  { id: 3, name: "Charity Marathon", date: "2025-10-01", availableSeats: 10, category: "Sports" },
  { id: 4, name: "Baking Workshop", date: "2025-07-15", availableSeats: 5, category: "Workshop" },
];

const eventsContainer = document.querySelector("#events-container");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

// Current filter/search state
let currentCategory = "all";
let currentSearch = "";

// Render events based on filters
function renderEvents() {
  eventsContainer.innerHTML = "";

  // Filter by category and search text
  const filteredEvents = events.filter(event => {
    const matchesCategory = currentCategory === "all" || event.category === currentCategory;
    const matchesSearch = event.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filteredEvents.length === 0) {
    eventsContainer.textContent = "No events found.";
    return;
  }

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Category: ${event.category}</p>
      <p>Available Seats: <span class="seats">${event.availableSeats}</span></p>
    `;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.availableSeats === 0;

    // onclick event handler for Register button
    registerBtn.onclick = () => {
      if (event.availableSeats > 0) {
        event.availableSeats--;
        card.querySelector(".seats").textContent = event.availableSeats;
        if (event.availableSeats === 0) {
          registerBtn.disabled = true;
        }
        alert(`Registered for ${event.name}! Seats left: ${event.availableSeats}`);
      }
    };

    card.appendChild(registerBtn);
    eventsContainer.appendChild(card);
  });
}

// onchange event handler for category filter
categoryFilter.onchange = () => {
  currentCategory = categoryFilter.value;
  renderEvents();
};

// keydown event handler for search input
searchInput.onkeydown = (e) => {
  // Using setTimeout to wait for input update before filtering
  setTimeout(() => {
    currentSearch = searchInput.value;
    renderEvents();
  }, 0);
};

// Initial render
renderEvents();
