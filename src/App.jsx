import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Network from "./pages/DistributerNetwork";
import Safety from "./pages/CostumerSafety";
import Contact from "./pages/Contact";

// Helper Component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Navbar />

      {/* Added a wrapper with a class to push content down */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/network" element={<Network />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <style>{`
        .main-content {
          /* Your navbar is roughly 90px-100px tall. 
             This ensures the Hero sections start exactly where the navbar ends. */
          padding-top: 95px; 
        }

        @media (max-width: 992px) {
          .main-content {
            padding-top: 85px; /* Adjust for slightly smaller mobile navbar height */
          }
        }
      `}</style>
    </BrowserRouter>
  );
}

export default App;