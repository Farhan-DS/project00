interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeaAlbum(artist: string, title: string, tracks?: number): Album {
    if (tracks){ 
        return { artist, title, tracks };
    } else {
        return { artist, title};
    }
}

// Creating three different albums
const album1: Album = makeaAlbum('Sadqain', 'Education', 1996);
const album2: Album = makeaAlbum('Ismail Gulgee', 'Untitled', 2001 );
const album3: Album = makeaAlbum('Abdul Rashim Nagori', 'Anti martial law', 1983)

// Printing each album information
console.log(album1);
console.log(album2);
console.log(album3);