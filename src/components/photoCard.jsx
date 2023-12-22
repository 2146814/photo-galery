import React from "react";
import { useNavigate } from "react-router-dom";

//Styles
import "../styles/photoCard.css";

export default function PhotoCard({ photo }) {
  const navigate = useNavigate();

  function redirectToDetailPage() {
    navigate(`/photo/${photo.id}`, { state: { photo: photo } });
  };

  function showPhotographerPage(){
    window.mainBridge.openWithDefaultNavigator(`https://unsplash.com/@${photo.user.username}`);
  }

  return (
    <div className="photo-card" onClick={redirectToDetailPage}>
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
            onClick={showPhotographerPage}
          >
            {photo.user.name}
          </a>
        </small>
      </div>
    </div>
  );
}
