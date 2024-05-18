var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, color, model) {
    var extras = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        extras[_i - 3] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, color: color, model: model }, extras);
    return car;
}
// Calling the function with required information and additional properties
var Car = createCar("Toyota Corolla", "Blue", 2022);
// Printing the returned object
console.log(Car);
