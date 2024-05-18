function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        const greatMagician: string = "Great " + magician;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Original array of magicians
const magicians: string[] = ["Shahrukh", "Faisal Raja", "Raza Ali", "Mian Afzal Rasheed", "Sabir Ali"];

// Making a copy of the original array
const originalMagicians: string[] = [...magicians];

// Calling makeGreat() with the copy of the array
const greatMagicians: string[] = makeGreat(originalMagicians);

// Showing original magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Showing magicians with "Great" added
console.log("\nMagicians made great:");
showMagicians(greatMagicians);