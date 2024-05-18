// List of people I'd like to invite to dinner
let guests: string[] =  ["Mehmood Ahmed Shah", "Sultan Khan", "Arif Ali Shah", "Abdul Jabbar Khan"];

// Print invitations to each person
for (const guest of guests) {
    console.log(`Dear Mr. ${guest}, I would be honored to have you join me for dinner.`);
}

// Name of the guest who can't make it
const unableToAttend: string = "Mehmood Ahmed Shah";
console.log(`${unableToAttend} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
const newGuest: string = "Feroz Khan";
guests[guests.indexOf(unableToAttend)] = newGuest;

// Print a second set of invitation messages
for (const guest of guests) {
    console.log(`Dear Mr. ${guest}, I would be honored to have you join me for dinner.`);
}