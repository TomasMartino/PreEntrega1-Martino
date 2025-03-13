import NavBar from "./components/NavBar";
import "./App.css";
import "./components/NavBar.jsx";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { ItemListContainer } from "./ItemListContainer";
import ProductDetailContainer from "./components/ProductDetailContainer";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itemListContainer" element={<ItemListContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/producto/:id" element={<ProductDetailContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
