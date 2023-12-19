import React from "react";
import ReactDOM from "react-dom/client";

import Gallery from "./gallery.jsx";

export default function App() {
  return (
    <>
      <Gallery />
    </>
  );
}

const root = ReactDOM.createRoot(document.body);
root.render(<App />);
