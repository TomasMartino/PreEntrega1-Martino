import SectionHome from "./components/SectionHome";
import CartSlider from "./components/CartSlider";
import "./Home.css";
import NavBar from "./components/NavBar";
export const Home = () => {
  return (
    <div className="home">
      <NavBar/>
      <SectionHome />
      <CartSlider />
      
    </div>
  );
};


