import React from "react";
import { redirect, useLocation } from "react-router-dom";

//Ressources
import like from "../assets/heart.png";

//Styles
import "../styles/photoDetail.css";

export default function PhotoDetail() {
  const location = useLocation();
  const photo = location.state.photo;

  async function downloadPhoto(url) {
    await window.mainBridge.downloadPhoto(url);
  }

  function showPhotographerPage() {
    window.mainBridge.openWithDefaultNavigator(
      `https://unsplash.com/@${photo.user.username}`
    );
  }

  return (
    <div id="photoContainer">
      <img id="photo" src={photo.urls.regular} />
      <div id="likeContainer">
        <img src={like} />
        <small>{photo.likes}</small>
      </div>
      <p>{photo.description || photo.alt_description}</p>
      <p id="credits">
        {photo.created_at.split("T")[0]} -{" "}
        <a onClick={showPhotographerPage}>{photo.user.name}</a>
      </p>
      <div>
        {photo.tags.map((tag, index) => (
          <small className="tag" key={index}>
            {tag.title}
          </small>
        ))}
      </div>
      <button onClick={() => downloadPhoto(photo.links.download)}>
        Télécharger
      </button>
    </div>
  );
}
