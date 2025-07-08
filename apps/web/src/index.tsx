import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { Navigation } from "./components/navigation/navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);