function makeSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following toppings:");
    for (var _a = 0, toppings_1 = toppings; _a < toppings_1.length; _a++) {
        var topping = toppings_1[_a];
        console.log("- " + topping);
    }
    console.log("Enjoy your sandwich!\n");
}
// Calling the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");
