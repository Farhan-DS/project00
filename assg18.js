var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ["Frantfurt", "London", "Lahore", "San Francisco", "Dhaka"];
// Print original order
console.log("Original order:");
console.log(placesToVisit.join(", "));
// Print alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().join(", "));
// Check original order
console.log("\nOriginal order is intact:");
console.log(placesToVisit.join(", "));
// Print reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse().join(", "));
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit.join(", "));
//array of cities to be visited
var visitTobe = ["Karachi, Peshawar, Multan, Lahore, Quetta, Hyderabad"];
// Print original order
console.log("Original order:");
console.log(visitTobe.join(", "));
