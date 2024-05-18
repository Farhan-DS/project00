var country = "Pakistan";
var age = 18;
var passport = "United State";
var nationality = "Dual";
console.log("My age is ".concat(age, " and my country is ").concat(country, " and have a passport of ").concat(passport, ", I am ").concat(nationality, " Pakistani National"));
function Hello() {
    console.log("Hello World from Function");
}
Hello();
function farhan() {
    console.log("My Name is Syed Farhan Hassan");
}
farhan();
function greet(name) {
    console.log("Hello ".concat(name));
}
greet("Farhan Hassan");
greet("Abdul Rasheed Shaikh");
greet("Abdul Bari Khan");
greet("Murad Ali Shah");
function info(name, age, email, address) {
    console.log("My Name is ".concat(name, ", I am ").concat(age, " year Old having email ID ").concat(email, " and reside at ").concat(address));
}
info("Syed Farhan Hassan", 36, "farhan.hassan@gmail.com", "House No 23 Street 9, FB Area, Karachi");
info("Syed Farhan Hassan", 36, "farhan.hassan@gmail.com", "House No 23 Street 9, FB Area, Karachi");
info("Syed Farhan Hassan", 36, "farhan.hassan@gmail.com", "House No 23 Street 9, FB Area, Karachi");
info("Syed Farhan Hassan", 36, "farhan.hassan@gmail.com", "House No 23 Street 9, FB Area, Karachi");
function operators() {
    var num1 = 5;
    var num2 = 6;
    console.log(num1 + num2);
    console.log(num1 + num2);
    console.log(num1 / num2);
    console.log((num2 / num1) * 10);
}
operators();
function sum(digit) {
    console.log(digit + digit);
    console.log(digit * digit);
    console.log(digit / digit);
}
sum(20);
sum(111);
sum(1222);
function game(userName) {
    if (userName === void 0) { userName = "userName"; }
    console.log("".concat(userName));
}
game();
game("Ali");
function add(dig, digTwo) {
    if (dig === void 0) { dig = 5; }
    if (digTwo === void 0) { digTwo = 2; }
    console.log(dig + digTwo, dig * digTwo, dig / digTwo);
}
add();
add(10, 20);
add(10);
function cookMeal(type, receipe, dishName) {
    return ("".concat(type, ", ").concat(receipe, ", ").concat(dishName));
}
console.log(cookMeal("Chiken", "Shan", "Biryani"));
console.log(cookMeal("Meat", "Mehran", "Qurma"));
console.log("farhan");
function Country(d, dTwo) {
    return "".concat(d * dTwo, ", ").concat(d + dTwo, ", ").concat(d / dTwo);
}
console.log(Country(10, 5));
console.log(Country(1, 5));
function Name() {
    console.log("Hello");
}
console.log("Hello");
//defined gloablly. outside of any function or code block
//You can access it from anywhere including the function, code block, nested funciton etc
var GlobalVar = 100;
function someFn() {
    console.log(GlobalVar);
    if (true) { //code block
        console.log(GlobalVar);
    }
    function nested() {
        console.log(GlobalVar);
    }
}
for (var c = 0; c < 3; c++) { //code block
    console.log(GlobalVar);
}
function someOtherFn1() {
    console.log(GlobalVar);
}
console.log(GlobalVar); //outside of any function/code block
function Calc(digit1, digit2, sign) {
    if (sign == "+")
        console.log(digit1 + digit2);
}
Calc(5, 1110, "+");
var sirAmeen = "Sir Ameen";
function Alisession() {
    var Ali = "Sir Ali";
    console.log(Ali);
    console.log(sirAmeen);
}
Alisession();
var Hamzahsession = function () {
    var hamzah = "Hamzah";
    console.log(hamzah);
    console.log(sirAmeen);
};
Hamzahsession();
var ARMY = "Pak Army";
var KPS = function () {
    console.log(KPS);
    console.log(ARMY);
};
KPS();
var SFP = function () {
    console.log(SFP);
    console.log(ARMY);
};
SFP();
function farhan1() {
    var farhan1 = "Waseem Uddin Qureshi";
    console.log("Waseem Uddin Qureshi");
}
farhan1();
