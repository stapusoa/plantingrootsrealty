import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { Navigation } from "./components/navigation";
import type { PageType } from "./components/navigation/types";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const handleNavigate = (page: PageType) => setCurrentPage(page);

  return (
    <>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <Home />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);