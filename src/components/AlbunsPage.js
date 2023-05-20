import AlbumCard from "./AlbumCard";
import '../styles/app.css';
import { useState } from "react";

export default function AlbunsPage({albums}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredAlbums = albums.filter((album) =>
      album.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title text-right">Albuns</h1>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3" style={{ textAlign: 'right' }}>
            <div className="input-group input-group-dark">
              <input
                type="text"
                className="form-control form-control-dark"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        <hr className="w-100" />
        <div className="row">
          {filteredAlbums.map((album) => (
            <div className="col-md-3" key={album.id}>
              <div className="album-card-container">
                <AlbumCard album={album} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}