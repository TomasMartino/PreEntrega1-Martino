import "./components/NavBar.jsx";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { ItemListContainer } from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import MiProvider from "./components/CustomContext";
import Carrito from "./components/Carrito.jsx"; 

function App() {
  return (
    <MiProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itemListContainer" element={<ItemListContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Carrito />} />
         </Routes>
        <Footer />
      </div>
    </MiProvider>
  );
}

export default App;
