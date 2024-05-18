// Define the array of animal names
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of each animal using a for loop
console.log("Animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    
    console.log(`A ${animal.toUpperCase()} would make a great pet.`);
}

// Additional sentence stating common characteristic
console.log("\nAny of these animals would make a great pet!");

//Define the array of birds names
let birds: string []= ["Parrot", "Peacock", "Finch"];
//Print the names of each bird using a for loop
console.log("bird names");
for (let bird of birds){
    console.log(bird);
}
//Print a statement about each bird
console.log("\nStatement about each bird:");
for (let bird of birds){
    console.log(`A ${bird.toUpperCase()} is a good pet.`)

}
//Additional sentence stating common characteristic
console.log("\nAny of these birds would make a good pet!");
