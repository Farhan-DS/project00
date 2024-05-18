let fruit = "apple";
let color = "red";
let age1 = 25;
let age2 = 30;
let isWeekend = true;
let isHoliday = false;
let fruitsArray = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Test for equality with strings: apple === apple, I predict True.");
console.log(fruit === "apple"); // True

console.log("Test for inequality with strings: apple !== banana, I predict True.");
console.log(fruit !== "banana"); // True

// Tests using the lower case function
console.log("Test using lower case function: 'Red' converted to lowercase is 'red', I predict True.");
console.log(color.toLowerCase() === "red"); // True

// Numerical tests
console.log("Numerical test: 25 > 30, I predict False.");
console.log(age1 > age2); // False

console.log("Numerical test: 30 >= 25, I predict True.");
console.log(age2 >= age1); // True

// Tests using "and" and "or" operators
console.log("Test using 'and' operator: isWeekend && isHoliday, I predict False.");
console.log(isWeekend && isHoliday); // False

console.log("Test using 'or' operator: isWeekend || isHoliday, I predict True.");
console.log(isWeekend || isHoliday); // True

// Test whether an item is in an array
console.log("Test whether 'banana' is in the fruits array, I predict True.");
console.log(fruitsArray.includes ("orange")); // True

// Test whether an item is not in an array
console.log("Test whether 'grape' is not in the fruits array, I predict True.");
console.log(!fruitsArray.includes ("apple")); // True
