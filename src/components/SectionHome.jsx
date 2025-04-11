import "./SectionHome.css";
import { Link } from "react-router-dom";

function SectionHome() {
  return (
    <div>
      <div className="container-all">
        <h1 className="title">Bienvenido a Voga</h1>
        <Link className="button-home" to="/itemListContainer" style={{ fontSize: "16px" }}>Ver Productos</Link> 
      </div>
    </div>
  );
}

export default SectionHome;
