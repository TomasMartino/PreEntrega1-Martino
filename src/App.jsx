import NavBar from "./components/NavBar";
import "./App.css";
import "./components/NavBar.jsx";
import SectionHome from "./components/SectionHome";
import CartSlider from "./components/CartSlider";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <SectionHome />
      <CartSlider/>
      <Footer/>
    </>
  );
}

export default App;
