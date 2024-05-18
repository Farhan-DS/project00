let country = "Pakistan"
const age: number =18
const passport = "United State"
const nationality = "Dual"
console.log(`My age is ${age} and my country is ${country} and have a passport of ${passport}, I am ${nationality} Pakistani National`);
function Hello(){
    console.log("Hello World from Function")
}
Hello()
function farhan(){
    console.log("My Name is Syed Farhan Hassan")
}
farhan()
function greet(name:string){
    console.log(`Hello ${name}`)

}
greet("Farhan Hassan")
greet("Abdul Rasheed Shaikh")
greet("Abdul Bari Khan")
greet("Murad Ali Shah")
function info(name:string, age:number, email:string, address: string){
    console.log(`My Name is ${name}, I am ${age} year Old having email ID ${email} and reside at ${address}`)

}
info("Syed Farhan Hassan", 36, "farhan.hassan@gmail.com", "House No 23 Street 9, FB Area, Karachi")
info("Syed Farhan Hassan", 36, "farhan.hassan@gmail.com", "House No 23 Street 9, FB Area, Karachi")
info("Syed Farhan Hassan", 36, "farhan.hassan@gmail.com", "House No 23 Street 9, FB Area, Karachi")
info("Syed Farhan Hassan", 36, "farhan.hassan@gmail.com", "House No 23 Street 9, FB Area, Karachi")

function operators(){
    let num1: number = 5
    let num2: number = 6
        console.log(num1+num2)
        console.log(num1+num2)
        console.log(num1/num2)
        console.log((num2/num1)*10)

}
operators()
function sum(digit){
    console.log(digit + digit)
    console.log(digit*digit)
    console.log(digit/digit)

}
sum(20)
sum(111)
sum(1222)
function game(userName: string = "userName") {
    console.log(`${userName}`);
}
    game();
    game("Ali")

    function add(dig: number = 5, digTwo: number = 2){
        console.log(dig + digTwo, dig*digTwo, dig/digTwo);
    }
    add()
    add(10, 20)
    add(10)

    function cookMeal(type: string, receipe: string, dishName: string){
        return (`${type}, ${receipe}, ${dishName}`);
    }
        console.log(cookMeal("Chiken", "Shan", "Biryani"));
        console.log(cookMeal("Meat", "Mehran", "Qurma"));
        console.log("farhan");
    

        function Country(d: number, dTwo: number){
            return `${d*dTwo}, ${d+dTwo}, ${d/dTwo}` 
            }
            console.log(Country(10, 5));
            console.log(Country(1,5));

            function Name() {
                console.log("Hello");

            }
            console.log("Hello");

//defined gloablly. outside of any function or code block
//You can access it from anywhere including the function, code block, nested funciton etc
 
let GlobalVar=100;  
 
function someFn() {          //function
 
  console.log(GlobalVar)
 
  if (true) {         //code block
    console.log(GlobalVar)
  }
 
  function nested() {         //nested function within someFn1
    console.log(GlobalVar)
  }
 
}
 
for (let c = 0; c < 3; c++){    //code block
  console.log(GlobalVar);
}
 
function someOtherFn1() {       //another function
  console.log(GlobalVar)
}
 
console.log(GlobalVar)          //outside of any function/code block

function Calc(digit1: number, digit2: number, sign: string)
{
    if (sign == "+" )
    console.log(digit1+digit2)
        
    }


Calc(5, 1110, "+" )


let sirAmeen = "Sir Ameen"
function Alisession(){
    let Ali = "Sir Ali"
    console.log(Ali)
    console.log(sirAmeen);
}
Alisession()
const Hamzahsession = () => {
    let hamzah = "Hamzah"
    console.log(hamzah);
    console.log(sirAmeen)


}
Hamzahsession()

let ARMY = "Pak Army"
const KPS = () => {
    console.log(KPS);
    console.log(ARMY);


}
KPS()
const SFP = () => {
    console.log(SFP);
    console.log(ARMY);

}
SFP()

function farhan1(){
    let farhan1 = "Waseem Uddin Qureshi";
    console.log("Waseem Uddin Qureshi");
}
farhan1()