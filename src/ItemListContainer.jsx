import { useState, useEffect } from "react";
import Item from "./components/Item";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import { getDocs, collection, getFirestore, where, query } from "firebase/firestore";
import { app } from "./ImportarProductos.js";


export const ItemListContainer = () => {
  const [products, setProducts] = useState([]); 
  const params = useParams();




  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");

    let miConsulta;
    if (params.id === undefined) {
      //consulta sin filtro
      miConsulta = getDocs(productosCollection);
    } else {
      //consulta con filtro
      const miFiltro = query(productosCollection, where("category.name", "==", params.id));
      miConsulta = getDocs(miFiltro);
    }



    const productoConFormato = [];

     miConsulta
      .then((respuesta) => {
      respuesta.docs.forEach((doc)=>{
        productoConFormato.push(doc.data());
        setProducts(productoConFormato);
      }) 
      })
     .catch(() => {
       console.log("Error al cargar los productos");
     })
  }, [params.id]);




  return (
    <div className="all-products">
      <NavBar />
      <div >
        <ul className="category-list">
          <li><Link to="/categoria/Games">Ropa</Link></li>
          <li><Link to="/categoria/Miscellaneous">Misceláneas</Link></li>
          <li><Link to="/categoria/Electronics">Electrodomestico</Link></li>
          <li><Link to="/categoria/Furniture">Muebles</Link></li>
          <li><Link to="/categoria/Shoes">Zapatillas</Link></li>
        </ul>
      </div>
      <div className="fluid-grid">
        {products.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </div>
    </div>
  );
};
