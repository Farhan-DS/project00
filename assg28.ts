
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

//If the person is less than 2 years old, print a message that the person is a baby.
let personAge: number = 70;
if (personAge < 2){

    console.log("Person is less than 2 years old this person is a baby");
}

//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

 else if (personAge === 2 || personAge < 4 ) {
    console.log("Person is less than 4 years old this person is a toddler");
} 
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (personAge === 4 || personAge < 13) {
    console.log("Person is less than 13 years old this person is a kid");
}
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (personAge === 20 || personAge < 65) {
    console.log("Person is less than 65 years this person is an adult");
}
//If the person is age 65 or older, print a message that the person is an elder.
else if (personAge ===  65  || personAge > 65 ){
    console.log("Person is older this person is an elder");
} 

 
 