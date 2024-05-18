function makeaAlbum(artist, title, tracks) {
    if (tracks) {
        return { artist: artist, title: title, tracks: tracks };
    }
    else {
        return { artist: artist, title: title };
    }
}
// Creating three different albums
var album1 = makeaAlbum('Sadqain', 'Education', 1996);
var album2 = makeaAlbum('Ismail Gulgee', 'Untitled', 2001);
var album3 = makeaAlbum('Abdul Rashim Nagori', 'Anti martial law', 1983);
// Printing each album information
console.log(album1);
console.log(album2);
console.log(album3);
