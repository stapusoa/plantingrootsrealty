import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { MarkdownPage } from "./pages/MarkdownPage";
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
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        <Route path="/page/:slug" element={<MarkdownPage />} />
      </Routes>
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