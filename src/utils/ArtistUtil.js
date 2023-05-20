class ArtistUtil {

    static getMinutage(durationMs){
        const minutes = Math.floor(durationMs / 60000); 
        const seconds = Math.floor((durationMs % 60000) / 1000);

        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        return formattedTime;
    };

    static getArtistsName (artists) {
        var artistsString = '';

        artists.forEach((element, index) => {
            artistsString += element.name;
            if (index !== artists.length - 1) {
                artistsString += ', ';
            }
        });

        return artistsString;
    };

} 

export default ArtistUtil;