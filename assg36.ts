// Define the Shirt interface
interface Shirt {
    size: string;
    message: string;
}

// Function to make a shirt
function make_shirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
    return { size, message };
}

// Create a large shirt with the default message
const largeShirt: Shirt = make_shirt();
console.log("Large shirt:", largeShirt);

// Create a medium shirt with the default message
const mediumShirt: Shirt = make_shirt("medium");
console.log("Medium shirt:", mediumShirt);

// Create a custom-sized shirt with a different message
const customShirt: Shirt = make_shirt("small", "I also love JavaScript");
console.log("Custom-sized shirt:", customShirt);

//Define the Pant interface
interface Pant {
    size: string;
    message: string;
}
//Function to make a Pant
function makePant(size: string = "Large", message: string = "I Love PHP"): Pant {
    return{size, message};

}
//Create a Large size Pant with the default message
const largePant: Pant = makePant();
console.log("Large Pant:", largePant );

//Create a Medium Size Pant with the default message
const mediumPant: Pant = makePant();
    console.log("Medium Pant:", mediumPant);

//Create a Custom-Sized Pant with a different message
const customPant: Pant = makePant("small", "I also love to PHP");
console.log("small Pant:", customPant);

