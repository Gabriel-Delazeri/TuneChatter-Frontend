import { useEffect, useState } from "react";
import musicboxdapi from "./services/musicboxdapi";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import './styles/App.css'
import './styles/Home.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselAlbums from "./components/CarouselAlbums";
import HomeText from "./components/HomeText";

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
          <div className="row albums-carousel">
            <CarouselAlbums albums={albums} />
          </div>
          <div>
            <HomeText/>
          </div>
        </div>
    </div>
  );
}

export default App;
