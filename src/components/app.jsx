import React from "react";
import ReactDOM from "react-dom/client";

import Hello from "./hello.jsx";

export default function App() {
  return (
    <>
      <h1>Hello from React !</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.body);
root.render(<App />);
