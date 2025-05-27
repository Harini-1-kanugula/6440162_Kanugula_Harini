// Event storage
const events = [];

// 1. addEvent - add a new event to the list
function addEvent(name, date, seats, category) {
  events.push({
    name,
    date,
    availableSeats: seats,
    category
  });
}

// 2. Closure to track total registrations per category
function registrationTracker() {
  const registrations = {}; // category -> count

  return function(category) {
    if (!registrations[category]) {
      registrations[category] = 0;
    }
    registrations[category]++;
    return registrations[category];
  };
}

const trackRegistration = registrationTracker();

// 3. registerUser - register a user for an event by name and track category registrations
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (!event) {
    console.error("Event not found");
    return;
  }
  const today = new Date();
  const eventDate = new Date(event.date);

  if (eventDate < today) {
    console.error("Cannot register: Event is in the past");
    return;
  }
  if (event.availableSeats <= 0) {
    console.error("Cannot register: No seats available");
    return;
  }

  event.availableSeats--;
  const totalRegs = trackRegistration(event.category);
  console.log(`Registered for ${event.name}. Seats left: ${event.availableSeats}. Total registrations in category '${event.category}': ${totalRegs}`);
}

// 4. Higher-order function filterEventsByCategory - accepts a callback for flexible filtering
function filterEventsByCategory(category, filterCallback) {
  return events.filter(event => event.category === category && filterCallback(event));
}

// --- Usage Example ---

// Add some events
addEvent("Community Cleanup Day", "2025-06-15", 5, "Volunteer");
addEvent("Neighborhood Block Party", "2024-11-20", 0, "Social");
addEvent("Charity Marathon", "2025-10-01", 10, "Sports");
addEvent("Book Club Meeting", "2025-05-30", 15, "Social");

// Filter upcoming events in 'Social' category
const upcomingSocialEvents = filterEventsByCategory("Social", event => new Date(event.date) >= new Date());

console.log("Upcoming Social Events:");
upcomingSocialEvents.forEach(e => console.log(`- ${e.name} on ${e.date}, Seats: ${e.availableSeats}`));

// Register users
registerUser("Community Cleanup Day");  // Seats left: 4, registrations in Volunteer: 1
registerUser("Book Club Meeting");      // Seats left: 14, registrations in Social: 1
registerUser("Charity Marathon");       // Seats left: 9, registrations in Sports: 1
registerUser("Community Cleanup Day");  // Seats left: 3, registrations in Volunteer: 2
