import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import NavBar from "./components/NavBar";
import { miContexto } from "./components/customContext";
import { useContext } from "react";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "./ImportarProductos.js";

const ItemDetailContainer = () => {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    const idNumerico = parseInt(productId);

    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");

    const miFiltro = query(productosCollection, where("id", "==", idNumerico));
    const miConsulta = getDocs(miFiltro)
      .then((respuesta) => {
        const productoEncontrado = respuesta.docs.map((doc) => {
          return doc.data();
        });

        setProduct(productoEncontrado[0]);
      })
      .catch(() => {
        console.log("Error al cargar los productos");
      });

    const productoConFormato = [];

    miConsulta
      .then((respuesta) => {
        respuesta.docs.forEach((doc) => {
          productoConFormato.push(doc.data());
          setProduct(productoConFormato);
        });
      })
      .catch(() => {
        console.log("Error al cargar los productos");
      });
  }, [productId]);

  const valor = useContext(miContexto);

  const addToCart = async () => {
    // Guarda el producto en el localStorage
    const productosEnCarrito = localStorage.getItem('productosEnCarrito');
    if (productosEnCarrito) {
      const productosEnCarritoArray = JSON.parse(productosEnCarrito);
      productosEnCarritoArray.push(product);
      localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarritoArray));
    } else {
      localStorage.setItem('productosEnCarrito', JSON.stringify([product]));
    }
    valor.handleAgregar(product);
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1>{product.title} </h1>
        <p>{product.description}</p>
        <p>price: {product.price}</p>
        <img src={product.images} alt={product.title} />
        <button onClick={addToCart} style={{ color: "white" }}>
          agregar carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
