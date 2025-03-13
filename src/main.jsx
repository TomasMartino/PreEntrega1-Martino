import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const DOMElement = document.getElementById("root");
const VDOMElement = createRoot(DOMElement);

VDOMElement.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
