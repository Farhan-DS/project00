function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Reusing the show_magicians function from the previous example
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
const magicians: string[] = ["Shahrukh", "Faisal Raja", "Raza Ali", "Mian Afzal Rasheed", "Sabir Ali"];

// Modifying the array to add "the Great" to each magician's name
make_great(magicians);

// Calling the function to show magicians
show_magicians(magicians);