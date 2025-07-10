import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import {Home} from "./pages/Home";
import "./index.css";
import { Navigation } from "./components/navigation";
import type { PageType } from "./components/navigation/types";
import { withLDProvider } from "launchdarkly-react-client-sdk";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const handleNavigate = (page: PageType) => setCurrentPage(page);

  return (
    <>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <Home onNavigate={handleNavigate} />
    </>
  );
}

const LDApp = withLDProvider({
  clientSideID: "686ffb31d2db8409436cef4b",
  reactOptions: {
    useCamelCaseFlagKeys: false,
  },
})(() => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LDApp />
);