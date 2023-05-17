export default function AlbumCard({album}) {
    return (
        <div className="col-md-12 col-sm-12 col-12 d-flex flex-column align-items-center">
            <img className="album-card" src={album.imageUrl} alt={album.name} />
        </div>
    )
}