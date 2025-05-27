// Sample list of events
const events = [
  {
    name: "Community Cleanup Day",
    date: "2025-06-15",
    availableSeats: 5,
  },
  {
    name: "Neighborhood Block Party",
    date: "2024-11-20",
    availableSeats: 0, // full event
  },
  {
    name: "Charity Marathon",
    date: "2023-10-01", // past event
    availableSeats: 10,
  },
];

// Get today's date for comparison
const today = new Date();

// Function to check if event is valid (upcoming and seats available)
function isValidEvent(event) {
  const eventDate = new Date(event.date);
  return eventDate >= today && event.availableSeats > 0;
}

// Filter and display valid events
console.log("Upcoming Events with Seats Available:");
events.forEach(event => {
  if (isValidEvent(event)) {
    console.log(`- ${event.name} on ${event.date}, Seats left: ${event.availableSeats}`);
  } else {
    // You can also choose to log or ignore invalid events
    console.log(`(Event "${event.name}" is either full or past and hidden)`);
  }
});

// Registration function with error handling
function register(eventName) {
  try {
    // Find event by name
    const event = events.find(ev => ev.name === eventName);
    if (!event) throw new Error("Event not found");

    // Check if event is valid before registration
    if (!isValidEvent(event)) {
      throw new Error("Event is full or already past");
    }

    // Decrement seats on registration
    event.availableSeats--;

    console.log(`Successfully registered for ${event.name}. Seats left: ${event.availableSeats}`);

  } catch (error) {
    console.error(`Registration error: ${error.message}`);
  }
}

// Test registrations
register("Community Cleanup Day");  // success
register("Neighborhood Block Party"); // error: full event
register("Charity Marathon"); // error: past event
register("Non-existent Event"); // error: event not found
