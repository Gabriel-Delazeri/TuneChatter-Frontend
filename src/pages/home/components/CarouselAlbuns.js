import React from "react";
import Slider from 'react-slick'
import { useState, useEffect } from "react";
import TuneChatterApi from "../../../services/TuneChatterApi";
import AlbumCover from "./AlbumCover";

const CarouselAlbuns = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
      TuneChatterApi
      .get("/albums")
      .then((response) => setAlbums(response.data))
    }, []);

    return (
        <Slider {...settings}>
            {albums.map(album => (
                <div key={album.id}>
                    <div className="album-card-carousel-container">
                        <AlbumCover album={album}/>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CarouselAlbuns;