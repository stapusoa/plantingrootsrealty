import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "@/pages/Home"
import { SanityPage } from "@/lib/cms/components/PageLayout"
import "./index.css"
import "./App.css"
import { Navigation } from "@/components/navigation"
import type { PageType } from "@/components/navigation/types"
import { withLDProvider } from "launchdarkly-react-client-sdk"
import RealEstateGallery from "@/pages/Listings/Gallery"
import { About } from "@/pages/About/About"
import { Blog } from "@/pages/Blog/Blog"
import { ContactPage } from "@/pages/Contact/ContactPage"
import { Footer } from '@/components/navigation/footer'
import ListingDetails from "@/pages/Listings/ListingDetails"

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const handleNavigate = (page: PageType) => setCurrentPage(page)

  return (
    <>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        <Route path="/:slug" element={<SanityPage />} />
        <Route path="/listings" element={<RealEstateGallery />} />
        <Route path="/listings/:id" element={<ListingDetails />} />

        {/*<Route path="/resources" element={<BlogsOld />} /> */}
        <Route path="/our-story" element={<About />} />
        <Route path="/resources" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer onNavigate={handleNavigate} />
    </>
  )
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
))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LDApp />
)

export { App }