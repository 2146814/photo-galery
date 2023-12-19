import React from "react";

//Components

//Styles
import "../styles/gallery.css";

export default function Gallery() {
  const data = null;

  return (
    <>
      <h1>Galerie de photos</h1>
      {data === null ? (
        <div id="loading">Loading...</div>
      ) : data.errors ? (
        <div id="error">
          <small>Erreur !</small>
        </div>
      ) : (
        <div id="gallery-container">
          <p>Les photos iront là !</p>
        </div>
      )}
    </>
  );
}
