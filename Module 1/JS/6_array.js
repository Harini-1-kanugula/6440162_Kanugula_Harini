// Initial array of events
const communityEvents = [
  { name: "Baking Workshop", category: "Workshop", date: "2025-06-10" },
  { name: "Jazz Night", category: "Music", date: "2025-07-12" },
  { name: "Yoga Session", category: "Wellness", date: "2025-06-20" },
];

// 1. Add new events using .push()
communityEvents.push({ name: "Rock Concert", category: "Music", date: "2025-08-05" });
communityEvents.push({ name: "Photography Class", category: "Workshop", date: "2025-06-25" });

// 2. Use .filter() to show only music events
const musicEvents = communityEvents.filter(event => event.category === "Music");

console.log("Music Events:");
musicEvents.forEach(event => console.log(`- ${event.name} on ${event.date}`));

// 3. Use .map() to format display cards (string representation)
const displayCards = communityEvents.map(event => `${event.category} on ${event.name}`);

console.log("\nAll Event Cards:");
displayCards.forEach(card => console.log(card));
