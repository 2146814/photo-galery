import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Modules externes
const axios = require("axios");

//Components
import PhotoCard from "./photoCard.jsx";

//Styles
import "../styles/gallery.css";

export default function Gallery() {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Cats");

  useEffect(() => {
    async function getPhotos(searchQuery) {
      const unsplashApiKey = "EbT3Qb1DWgF96rZ3G146_4oAHVDSYZ_cJ0hBWlPm4AI";

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
      <h1>
        Galerie de{" "}
        <input
          type="text"
          placeholder="..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </h1>
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
