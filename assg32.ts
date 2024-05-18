let currentUsers: string[] = ["Jamshed Ali Khan", "Ismail Shah", "Zakir Khan", "Seemab Choudhry", "Mariam Shah"];
let newUsers: string[] = ["Akmal Khan", "Dawood Zakaria", "Safina Sultan", "Shumaila Shah", "Bahadur Khan Zafar"];

for (let newUser of newUsers) {
    let usernameExists = false;
    for (let currentUser of currentUsers) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}