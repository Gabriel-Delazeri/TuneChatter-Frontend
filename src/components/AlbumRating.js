import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt as halfStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStarEmpty } from '@fortawesome/free-regular-svg-icons';

const AlbumRating = ({ score }) => {
  const renderStars = () => {
    const fullStars = Math.floor(score);
    const halfStarVisible = score - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={solidStar} />);
    }

    if (halfStarVisible) {
      stars.push(<FontAwesomeIcon key="half-star" icon={halfStar} />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<FontAwesomeIcon key={`empty-star-${i}`} icon={regularStarEmpty} />);
    }

    return stars;
  };

  return <div className="album-rating">{renderStars()}</div>;
};

export default AlbumRating;