// List of people I'd like to invite to dinner
const guests: string[] = ["Mehmood Ahmed Shah", "Sultan Khan", "Arif Ali Shah", "Abdul Jabbar Khan"];

// Print invitations to each person
for (const guest of guests) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

// List of People I would not like to invite to Dinner
const invitees: string[] = ["Mubashir Shah", "Masood Ahmed Khan", "Saleem Altaf", "Sikandar Bakht" ];
for (const invitee of invitees){
    console.log(`Sorry Mr. ${invitee}, would not like to invite you for dinner`);
}