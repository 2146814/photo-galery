import React from "react";

//Ressources
import galleryCSS from "../assets/gallery.png";
import navbarCSS from "../assets/navbar.png";
import photoDetailCSS from "../assets/photoDetail.png";

//Styles
import "../styles/about.css";

export default function About() {
  function showGitDepot() {
    window.mainBridge.openWithDefaultNavigator(
      "https://github.com/2146814/photo-galery.git"
    );
  }

  function showAPiWebSite() {
    window.mainBridge.openWithDefaultNavigator(
      "https://unsplash.com/fr/explorer"
    );
  }

  return (
    <div id="aboutContainer">
      <h1>À propos de Galerie Photo</h1>
      <p>
        Ce travail est présenté par <strong>Justin Pagès</strong> du groupe{" "}
        <strong>#GROUPE</strong>. Dans le contexte du cours{" "}
        <strong>[NOM DU COURS]</strong>, ce prototype d'application de bureau
        programmé avec <strong>Electron</strong> et <strong>REACT</strong>{" "}
        affichent des images provenant de l'API{" "}
        <a href="#" onClick={showAPiWebSite}>
          Unsplash
        </a>{" "}
        et permet à l'utilisateur de les voir en détail.
      </p>
      <p>Les informations afficher sont les suivantes :</p>
      <ul>
        <li>L'image</li>
        <li>Sa description</li>
        <li>Son auteur</li>
        <li>Son nombre de like</li>
        <li>Les tags y correspondants</li>
      </ul>

      <strong>
        Lien vers dépôt git :{" "}
        <a href="#" onClick={showGitDepot}>
          https://github.com/2146814/photo-galery.git
        </a>
      </strong>

      <h2>Problème rencontrés :</h2>
      <p>Aucun</p>

      <h2>Modifications CSS :</h2>
      <h3>Navbar</h3>
      <img src={navbarCSS} />
      <h3>PhotoDetail</h3>
      <img src={photoDetailCSS} />
      <h3>Gallery</h3>
      <img src={galleryCSS} />
    </div>
  );
}
