// Define an array of fruits
const fruits: string[] = ["Apple", "Banana", "Orange"];

// Try to access an index that is out of bounds
console.log(fruits[3]); // Intentional error: Index 3 is out of bounds

// Correct the error by accessing a valid index
console.log(fruits[2]); // Accessing the valid index 1

// Output the entire array to verify correctness
console.log("Complete array:", fruits);