export default function AlbumCard({album}) {
    console.log(album)
    return (
        <div className="col-md-2 d-flex flex-column align-items-center">
            <img className="album-card" src={album.imageUrl} alt={album.name} />
            <p></p>
        </div>
    )
}