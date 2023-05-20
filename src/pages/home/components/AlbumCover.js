export default function AlbumCover ({album}) {
    
    return (
        <a href={`/album/${album.slug}`}>
            <img className="album-cover" src={album.image_url} alt={album.name} />
        </a>
    )
}