import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Home from "../pages/home/Home";
import AlbumList from "../pages/album/AlbumList"
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AlbumPage from "../pages/album/AlbumPage";

export default function RoutesApp () {
    
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/albuns" render={() => <AlbumList />}/>
                    <Route path="/album/:slug" render={() => <AlbumPage />}/>
                    <Route render={() => <h1>404: page not found</h1>} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
}