// Function to make a shirt
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return { size: size, message: message };
}
// Create a large shirt with the default message
var largeShirt = make_shirt();
console.log("Large shirt:", largeShirt);
// Create a medium shirt with the default message
var mediumShirt = make_shirt("medium");
console.log("Medium shirt:", mediumShirt);
// Create a custom-sized shirt with a different message
var customShirt = make_shirt("small", "I also love JavaScript");
console.log("Custom-sized shirt:", customShirt);
//Function to make a Pant
function makePant(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love PHP"; }
    return { size: size, message: message };
}
//Create a Large size Pant with the default message
var largePant = makePant();
console.log("Large Pant:", largePant);
//Create a Medium Size Pant with the default message
var mediumPant = makePant();
console.log("Medium Pant:", mediumPant);
//Create a Custom-Sized Pant with a different message
var customPant = makePant("small", "I also love to PHP");
console.log("small Pant:", customPant);
