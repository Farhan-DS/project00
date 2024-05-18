console.log("Famous Pakistani Magicians Name");
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of Pakistani magician's names
const magicians: string[] = ["Shahrukh", "Faisal Raja", "Raza Ali", "Mian Afzal Rasheed", "Sabir Ali"];

// Calling the function to show magicians
show_magicians(magicians);

console.log("--------------------------------------------");

function stageArtist(Artist: string[]): void {
    Artist.forEach(Artist => {
        console.log(Artist);
    })
}
//Array of Pakistan Stage's Artist Name
console.log("Famous Pakistani Stage Drama Artist Name");
const Artist: string[] = ["Umer Sharif", "Moin Akhtar", "Shakeel Siddiqui", "Bushra Ansari", "Ismail Tara", "Majid Jahangir"];

//calling the functin to show Stage Artist
stageArtist(Artist);