// Define Event class
class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = new Date(date);
    this.availableSeats = seats;
    this.category = category;
  }

  // Method to check if seats are available and event is upcoming
  checkAvailability() {
    const today = new Date();
    return this.availableSeats > 0 && this.date >= today;
  }
}

// Create some event objects
const event1 = new Event("Community Cleanup Day", "2025-06-15", 5, "Volunteer");
const event2 = new Event("Neighborhood Block Party", "2024-11-20", 0, "Social");
const event3 = new Event("Charity Marathon", "2023-10-01", 10, "Sports");

// Put them in an array
const events = [event1, event2, event3];

// List each event's keys and values using Object.entries()
events.forEach(event => {
  console.log(`Details for event: ${event.name}`);
  for (const [key, value] of Object.entries(event)) {
    console.log(`  ${key}: ${value}`);
  }
  // Check availability
  console.log(`  Available for registration? ${event.checkAvailability() ? "Yes" : "No"}`);
  console.log('----------------------------');
});
