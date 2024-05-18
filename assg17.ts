// Initial list of guests
let guests: string[] = ["Mehmood Ahmed Shah", "Sultan Khan", "Arif Ali Shah", "Abdul Jabbar Khan"];

// Print original invitation messages
console.log("Original invitation messages:");
for (let guest of guests) {
    console.log(`Dear ${guest}, You are invited to dinner.`);
}

// Inform about the limitation of guests
console.log("\nUnfortunately, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }
}

// Print invitation messages to remaining guests
console.log("\nInvitation messages to remaining guests:");
for (let guest of guests) {
    console.log(`Dear ${guest}, You are still invited to dinner.`);
}

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print to confirm an empty list
console.log("\nUpdated guest list:", guests);
