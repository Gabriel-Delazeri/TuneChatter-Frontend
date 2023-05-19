import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import musicboxdapi from "../services/musicboxdapi";
import '../styles/Albumpage.css';
import AlbumRating from "./AlbumRating";
import { FiClock } from 'react-icons/fi';

export default function AlbumPage() {
    const { slug } = useParams();;

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        musicboxdapi
            .get("/albums/by-slug/" + slug)
            .then((response) => setAlbum(response.data))
    }, []);

    const GetYear = ({ providedDate }) => {
        return new Date(providedDate).getFullYear();
    }

    const GetMinutage = ({ durationMs }) => {
        const minutes = Math.floor(durationMs / 60000); // Obtém os minutos arredondados
        const seconds = Math.floor((durationMs % 60000) / 1000); // Obtém os segundos arredondados

        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Formata o tempo como "mm:ss"

        return formattedTime;
    };

    const GetArtistsName = ({ artists }) => {
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
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="album-card-container">
                                    <img className="album-card" src={album.imageUrl} alt={album.name} />
                                    <AlbumRating score={3.5} />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 col-sm-12">
                                <h1 className="title">{album.name}</h1>
                                <h5 className="subtitle"><GetYear providedDate={album.releaseDate} />, {album.artists[0].name}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mid">
                        <h2 className="title mb-4">Tracks</h2>
                        <div className="row track-header">
                            <div className="col-3 col-md-1 d-flex align-items-center justify-content-center">
                                <h5 className="subtitle">#</h5>
                            </div>
                            <div className="col-7 col-md-10">
                                <h5 className="subtitle">Title</h5>
                            </div>
                            <div className="col-2 col-md-1">
                                <FiClock className="subtitle" />
                            </div>
                        </div>
                        <hr className="w-100" />
                        {album.tracks.sort((a, b) => a.number - b.number).map((track, index) => (
                            <div className="row">
                                <div className="col-3 col-md-1 d-flex align-items-center justify-content-center">
                                    <h4 className="title">{index + 1}</h4>
                                </div>
                                <div className="col-7 col-md-10">
                                    <h5 className="title">{track.name}</h5>
                                    <h5 className="subtitle"><GetArtistsName artists={track.artists} /></h5>
                                </div>
                                <div className="col-2 col-md-1">
                                    <h6 className="subtitle"><GetMinutage durationMs={track.durationMs} /></h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}