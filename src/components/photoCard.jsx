import React from "react";

//Styles
import "../styles/photoCard.css";

export default function PhotoCard({ photo }) {
  return (
    <div className="photo-card">
      <img
        className="img"
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
      <div className="photo-details">
        <p>{photo.description}</p>
        <small className="credit">
          Par{" "}
          <a
            target="_blank"
            href={`https://unsplash.com/@${photo.user.username}`}
          >
            {photo.user.name}
          </a>
        </small>
      </div>
    </div>
  );
}
