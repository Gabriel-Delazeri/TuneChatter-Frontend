import React, { useState } from 'react';
import AlbumRating from './AlbumRating';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const AlbumCard = ({ album }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div
        className="col-md-12 col-sm-12 col-12 d-flex flex-column align-items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href={`/album/${album.slug}`}>
          <img className={`album-card ${isHovered ? 'hovered' : ''}`} src={album.imageUrl} alt={album.name} />
          {isHovered && (
            <div className="album-name">
              <p>{album.name}</p>
              <p>{album.artists[0].name}</p>
              <div className="album-rating-container">
                <AlbumRating score={3.5} />
            </div>
            </div>
          )}
        </a>
      </div>
    );
  };
  
  export default AlbumCard;
