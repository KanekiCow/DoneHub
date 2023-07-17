import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import NavBar from "./components/NavBar.tsx";

const rootElement = document.getElementById("root");

if (rootElement != null) {
  rootElement.style.height = "100vh"; // Set the root element's height to 100% of the viewport height
  rootElement.style.width = "100vw"; // Set the root element's width to 100% of the viewport width
}

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
