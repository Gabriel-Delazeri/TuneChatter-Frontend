import { useEffect, useState } from "react";
import musicboxdapi from "./services/musicboxdapi";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar";
import './App.css'
import AlbumCard from "./components/album-card";

function App() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    musicboxdapi
    .get("/albums")
    .then((response) => setAlbums(response.data))
  }, []);

  return (
    <div className="App background">
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="text-center home-text">
              <h1>Track albums you've listened to.</h1>
              <h1>Save those you want to hear.</h1>
              <h1>Share your favorites with friends.</h1>
            </div>
          {
            albums.map(album => <AlbumCard album={album}/>)
          }
          </div>
        </div>
    </div>
  );
}

export default App;
