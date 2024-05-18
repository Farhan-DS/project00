var userNames = [("Farhan Hassan"), ("admin"), ("Syed Murad Ali Shah"), ("Abdul Wahab Khan")];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var username = userNames_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
