// Initial list of guests
var guests = ["Aslam Khan", "Ismail Shah", "Mehboob Mashood"];
// Print original invitation messages
console.log("Original invitation messages:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", You are invited to dinner."));
}
// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");
// Add new guests
guests.unshift("Dawood"); // Add one new guest to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Hassan"); // Add one new guest to the middle
guests.push("Fraz"); // Add one new guest to the end
// Print new invitation messages
console.log("\nUpdated invitation messages:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", You are invited to dinner."));
}
