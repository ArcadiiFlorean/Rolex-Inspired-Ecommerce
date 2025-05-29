import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componente principale
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Features from "./assets/components/Features";
import Cards from "./assets/components/Cards";
import ProductPages from "./assets/components/ProductPages";
import Footer from "./assets/components/Footer";
import ScrollVideo from "./assets/components/ScrollVideo";
// import ScrollVideoPage2 from "./assets/components/ScrollVideoPage2";

// Pagina Watch din NavComponents
import Watch from "./assets/components/NavComponents/Watch";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pagina principală */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <ScrollVideo />
         
              <Features />
  
              <Cards />

              <Footer />
            </>
          }
        />

        {/* Pagina individuală a produsului */}
        <Route path="/product" element={<ProductPages />} />

        {/* Pagina Watch */}
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
