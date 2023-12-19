import React from "react";
import { useState, useEffect } from "react";

//Modules externes
const axios = require("axios");

//Components

//Styles
import "../styles/gallery.css";

export default function Gallery() {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Cats");

  useEffect(() => {
    async function getPhotos(searchQuery) {
      const unsplashApiKey = "VOTRE_CLE_D'ACCES_UNSLAPSH";

      try {
        const apiResponse = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: searchQuery,
              page: 1,
              per_page: 30,
            },
            headers: {
              Authorization: `Client-ID ${unsplashApiKey}`,
            },
          }
        );

        var photos = apiResponse.data.results;

        setData({ photos: photos });
      } catch (error) {
        setData({ errors: [error.message] });
      }
    }

    getPhotos(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <h1>Galerie de photos</h1>
      {data === null ? (
        <div id="loading">Loading...</div>
      ) : data.errors ? (
        <div id="error">
          <small>{data.errors}</small>
        </div>
      ) : (
        <div id="gallery-container">
          {data.photos.map((photo) => (
            <PhotoCard photo={photo} key={photo.id} />
          ))}
        </div>
      )}
      <footer className="gallery-footer">
        <p>Propulsé by Unsplash</p>
      </footer>
    </>
  );
}
