import AlbumCard from "./AlbumCard";

export default function AlbumsPage({albums}) {

    return (
        <div className="container">
            <div className="row">
                {albums.map(album => (
                    <div className="col-md-3" key={album.id}>
                        <div className="album-card-container">
                            <AlbumCard album={album}/>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}