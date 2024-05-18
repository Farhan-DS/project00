interface Car {
    manufacturer: string;
    model: number;
    color: string
    [key: string]: any; // Allow arbitrary additional properties
}

function createCar(manufacturer: string, color: string, model: number, ...extras: { [key: string]: any }[]): Car {
    const car: Car = { manufacturer, color, model, ...extras };
    return car;
}

// Calling the function with required information and additional properties
const Car = createCar("Toyota Corolla", "Blue", 2022 );

// Printing the returned object
console.log(Car);