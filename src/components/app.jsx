import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter, Routes, Route } from "react-router-dom";

//Mes composants
import Gallery from "./gallery.jsx";
import About from "./about.jsx";
import Navbar from "./navbar.jsx";
import PhotoDetail from "./photoDetails.jsx";

export default function App() {
  return (
    <>
      <MemoryRouter>
        <Navbar />
        <Routes>
          <Route path="/main_window" element={<Gallery />} />
          <Route path="/" element={<Gallery />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.body);
root.render(<App />);
