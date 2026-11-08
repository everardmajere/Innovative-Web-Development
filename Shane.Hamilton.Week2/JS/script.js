class Artist {
    constructor(name, genre, songs) {
        this.name = name;
        this.genre = genre;
        this.songs = songs;
    }

    getDeails(){
        return `Artist: ${this.name}, Genre: ${this.genre}, Songs: ${this.songs}`;
    }

    getName(){
        return this.name;
    }

    getGenre(){
        return this.genre;
    }
    getSongs(){
        return this.songs;
    }

}




const artist1 = new Artist("Scene Queen", "Bimbocore", "Pink Rover, Metalicious, Barbie & Ken");
const artist2 = new Artist("Halsey", "Electropop, Rock", "New Americana, Heven in Hiding, Hurricane");
const artist3 = new Artist("Ashnikko", "Alternative Pop", "Daisy, Slumber party, Paint the Town Blue");
const artist4 = new Artist ("Bring Me The Horizon", "Metalcore, Post-Hardcore", "Drown, Can You Feel My Heart, Sleepwalking");
const artist5 = new Artist("Heilung", "Pagan Folk Metal", "Krigsgaldr, Norupo, Fylgija");


const artists = [artist1, artist2, artist3, artist4, artist5];

for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${artist.getName()}</td>
        <td>${artist.getGenre()}</td>
        <td>${artist.getSongs()}</td>
    `;
    document.getElementById("artistTableBody").appendChild(row);
}