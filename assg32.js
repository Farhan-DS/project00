var currentUsers = ["Jamshed Ali Khan", "Ismail Shah", "Zakir Khan", "Seemab Choudhry", "Mariam Shah"];
var newUsers = ["Akmal Khan", "Dawood Zakaria", "Safina Sultan", "Shumaila Shah", "Bahadur Khan Zafar"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var usernameExists = false;
    for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
        var currentUser = currentUsers_1[_a];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
}
