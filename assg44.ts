function makeSandwich(...toppings: string[]): void {
    console.log("Making a sandwich with the following toppings:");
    for (const topping of toppings) {
        console.log("- " + topping);
    }
    console.log("Enjoy your sandwich!\n");
}

// Calling the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");