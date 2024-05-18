// Define the makeShirt function
function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    return { size: size, message: message };
}
// Making a large shirt with the default message
var LargeShirt = makeShirt();
console.log("Large Shirt:", LargeShirt);
// Making a medium shirt with the default message
var MediumShirt = makeShirt('medium');
console.log("Medium Shirt:", MediumShirt);
// Making a shirt of any size with a different message
var CustomShirt = makeShirt('small', 'JavaScript is awesome!');
console.log("Custom Shirt:", CustomShirt);
