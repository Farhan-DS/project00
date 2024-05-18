console.log("Famous Pakistani Magicians Name");
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of Pakistani magician's names
var magicians = ["Shahrukh", "Faisal Raja", "Raza Ali", "Mian Afzal Rasheed", "Sabir Ali"];
// Calling the function to show magicians
show_magicians(magicians);
console.log("--------------------------------------------");
function stageArtist(Artist) {
    Artist.forEach(function (Artist) {
        console.log(Artist);
    });
}
//Array of Pakistan Stage's Artist Name
console.log("Famous Pakistani Stage Drama Artist Name");
var Artist = ["Umer Sharif", "Moin Akhtar", "Shakeel Siddiqui", "Bushra Ansari", "Ismail Tara", "Majid Jahangir"];
//calling the functin to show Stage Artist
stageArtist(Artist);
