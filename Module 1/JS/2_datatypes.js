// 1. Use const for event name and date
const eventName = "Community Cleanup Day";
const eventDate = "2025-06-15";

// 2. Use let for seats (available seats)
let availableSeats = 50;

// 3. Concatenate event info using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// 4. Manage seat count on registration (simulate a registration)
function registerSeat() {
  if (availableSeats > 0) {
    availableSeats--;  // decrement seat count on registration
    console.log(`Registration successful! Seats left: ${availableSeats}`);
  } else {
    console.log("Sorry, no seats available.");
  }
}

// Simulate 3 registrations
registerSeat();
registerSeat();
registerSeat();
