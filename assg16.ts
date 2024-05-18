// Initial list of guests
let guests: string[] = ["Aslam Khan", "Ismail Shah", "Mehboob Mashood"];

// Print original invitation messages
console.log("Original invitation messages:");
for (let guest of guests) {
    console.log(`Dear ${guest}, You are invited to dinner.`);
}

// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");

// Add new guests
guests.unshift("Dawood");  // Add one new guest to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Hassan");  // Add one new guest to the middle
guests.push("Fraz");  // Add one new guest to the end

// Print new invitation messages
console.log("\nUpdated invitation messages:");
for (let guest of guests) {
    console.log(`Dear ${guest}, You are invited to dinner.`);
}