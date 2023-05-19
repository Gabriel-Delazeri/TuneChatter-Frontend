import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import musicboxdapi from "../services/musicboxdapi";
import AlbumCard from "./AlbumCard";
import '../styles/albumpage.css';
import AlbumRating from "./AlbumRating";

export default function AlbumPage() {
    const {slug} = useParams();;

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        musicboxdapi
        .get("/albums/by-slug/" + slug)
        .then((response) => setAlbum(response.data))
    }, []);

    const GetYear = ({providedDate}) => {
        return new Date(providedDate).getFullYear();
    }

    const GetArtistsName = ({artists}) => {
        var artistsString = '';
      
        artists.forEach((element, index) => {
          artistsString += element.name;
          if (index !== artists.length - 1) {
            artistsString += ', ';
          }
        });
      
        return artistsString;
    }

    return (
        <div className="container album-container">
          {album.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            <div>
                <div className="top">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="album-card-container">
                                <img className="album-card" src={album.imageUrl} alt={album.name} />
                            <AlbumRating score={3.5}/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="title">{album.name}</h1>
                            <h5 className="subtitle"><GetYear providedDate={album.releaseDate} />, {album.artists[0].name}</h5>
                        </div>
                    </div>
                </div>
                <div className="mid">
                    <div className="row">
                        <h1 className="title">Tracks</h1>
                        <hr className="w-100" />
                        {album.tracks.sort((a,b) => a.number - b.number).map((track, index) => (
                            <div className="row">
                                <div className="col-md-1 d-flex align-items-center justify-content-center">
                                    <h4 className="title">{index + 1}</h4>
                                </div>
                                <div className="col-md-10">
                                    <h5 className="title">{track.name}</h5>
                                    <h5 className="subtitle"><GetArtistsName artists={track.artists} /></h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          )}
        </div>
      );
}