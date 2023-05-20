import './home.css';

import CarouselAlbuns from "./components/CarouselAlbuns"

export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <CarouselAlbuns />
            </div>
            <div>
                <div className="text-center">
                    <h1 style={{fontFamily:"cursive"}}>Track albums you've listened to.</h1>
                    <h1 style={{fontFamily:"cursive"}}>Save those you want to hear.</h1>
                    <h1 style={{fontFamily:"cursive"}}>Share your favorites with friends.</h1>
                    <button className="btn btn-primary bg-dark mt-3" style={{fontWeight:"lighter"}}>JOIN US!</button>
                </div>
            </div>
        </div>
    )
}