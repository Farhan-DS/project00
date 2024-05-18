// Initial list of guests
var guests = ["Mehmood Ahmed Shah", "Sultan Khan", "Arif Ali Shah", "Abdul Jabbar Khan"];
// Print original invitation messages
console.log("Original invitation messages:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", You are invited to dinner."));
}
// Inform about the limitation of guests
console.log("\nUnfortunately, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
// Print invitation messages to remaining guests
console.log("\nInvitation messages to remaining guests:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", You are still invited to dinner."));
}
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print to confirm an empty list
console.log("\nUpdated guest list:", guests);
