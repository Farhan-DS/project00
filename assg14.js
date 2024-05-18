// List of people I'd like to invite to dinner
var guests = ["Mehmood Ahmed Shah", "Sultan Khan", "Arif Ali Shah", "Abdul Jabbar Khan"];
// Print invitations to each person
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner."));
}
// List of People I would not like to invite to Dinner
var invitees = ["Mubashir Shah", "Masood Ahmed Khan", "Saleem Altaf", "Sikandar Bakht"];
for (var _a = 0, invitees_1 = invitees; _a < invitees_1.length; _a++) {
    var invitee = invitees_1[_a];
    console.log("Sorry Mr. ".concat(invitee, ", would not like to invite you for dinner"));
}
