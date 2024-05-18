// Define the array of animal names
var animals = ["Dog", "Cat", "Rabbit"];
// Print the names of each animal using a for loop
console.log("Animal names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toUpperCase(), " would make a great pet."));
}
// Additional sentence stating common characteristic
console.log("\nAny of these animals would make a great pet!");
//Define the array of birds names
var birds = ["Parrot", "Peacock", "Finch"];
//Print the names of each bird using a for loop
console.log("bird names");
for (var _b = 0, birds_1 = birds; _b < birds_1.length; _b++) {
    var bird = birds_1[_b];
    console.log(bird);
}
//Print a statement about each bird
console.log("\nStatement about each bird:");
for (var _c = 0, birds_2 = birds; _c < birds_2.length; _c++) {
    var bird = birds_2[_c];
    console.log("A ".concat(bird.toUpperCase(), " is a good pet."));
}
//Additional sentence stating common characteristic
console.log("\nAny of these birds would make a good pet!");
