class AlbumUtil {

    static getYear (providedDate) {
        return new Date(providedDate).getFullYear();
    }

}

export default AlbumUtil;