import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import TuneChatterApi from "../../services/TuneChatterApi";
import AlbumRating from "./components/AlbumRating";
import { FiClock } from "react-icons/fi";
import TrackUtil from "../../utils/TrackUtil";
import ArtistUtil from "../../utils/ArtistUtil";
import AlbumUtil from "../../utils/AlbumUtil";

export default function AlbumPage () {
    const { slug } = useParams();;

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        TuneChatterApi
            .get("/albums/by-slug/" + slug)
            .then((response) => setAlbum(response.data))
    }, []);

    return (
        <div className="container album-container">
            {album.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="top">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="album-card-container">
                                    <img className="album-card" src={album.image_url} alt={album.name} />
                                    <AlbumRating score={3.5} />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 col-sm-12">
                                <h1 className="title">{album.name}</h1>
                                <h5 className="subtitle">{AlbumUtil.getYear(album.release_date)}, {album.artists[0].name}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mid">
                        <h2 className="title mt-4 mb-4">Tracks</h2>
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
                                    <h6 className="subtitle">{ArtistUtil.getArtistsName(track.artists)}</h6>
                                </div>
                                <div className="col-2 col-md-1">
                                    <h6 className="subtitle">{TrackUtil.getMinutage(track.duration_ms)}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}