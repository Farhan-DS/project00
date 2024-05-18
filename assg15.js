// List of people I'd like to invite to dinner
var guests = ["Mehmood Ahmed Shah", "Sultan Khan", "Arif Ali Shah", "Abdul Jabbar Khan"];
// Print invitations to each person
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear Mr. ".concat(guest, ", I would be honored to have you join me for dinner."));
}
// Name of the guest who can't make it
var unableToAttend = "Mehmood Ahmed Shah";
console.log("".concat(unableToAttend, " can't make it to the dinner."));
// Replace the guest who can't make it with a new person
var newGuest = "Feroz Khan";
guests[guests.indexOf(unableToAttend)] = newGuest;
// Print a second set of invitation messages
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear Mr. ".concat(guest, ", I would be honored to have you join me for dinner."));
}
