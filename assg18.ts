// Array of places to visit
let placesToVisit: string[] = ["Frantfurt", "London", "Lahore", "San Francisco", "Dhaka"];

// Print original order
console.log("Original order:");
console.log(placesToVisit.join(", "));

// Print alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort().join(", "));

// Check original order
console.log("\nOriginal order is intact:");
console.log(placesToVisit.join(", "));

// Print reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse().join(", "));

// Check original order
console.log("\nOriginal order is still intact:");
console.log(placesToVisit.join(", "));

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit.join(", "));

// Reverse the order of the list again to get back to original order
placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit.join(", "));

// Sort the array alphabetically
placesToVisit.sort();
console.log("\nSorted alphabetically:");
console.log(placesToVisit.join(", "));

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit.join(", "));
//array of cities to be visited
let visitTobe: string[] = ["Karachi, Peshawar, Multan, Lahore, Quetta, Hyderabad"];
// Print original order
console.log("Original order:");
console.log(visitTobe.join(", "));