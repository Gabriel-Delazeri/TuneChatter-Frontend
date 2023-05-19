import CarouselAlbums from "./CarouselAlbums"

export default function HomeText({albums}) {
    return (
        <div className="container">
            <div className="row albums-carousel">
            <CarouselAlbums albums={albums} />
            </div>
            <div>
                <div className="text-center home-text">
                    <h1>Track albums you've listened to.</h1>
                    <h1>Save those you want to hear.</h1>
                    <h1>Share your favorites with friends.</h1>
                    <button className="btn btn-primary bg-dark mt-3">JOIN US!</button>
                </div>
            </div>
        </div>
    )
}