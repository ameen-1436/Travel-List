import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import "./flashCard.css";
import App from "./components/App";
//import FlashCard from "./Components/FlashCard";
//import "./accordion.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* //Uncomment to render the flashcard component//  <FlashCard /> */}
  </React.StrictMode>
);
