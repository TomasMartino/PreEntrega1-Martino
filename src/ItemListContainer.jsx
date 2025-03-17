import { useState, useEffect } from "react";
import Item from "./components/Item";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import NavBar from "./components/NavBar";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    const url =
      params.id === undefined
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/${params.id}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res.products);
      });
  }, [params.id]);

  return (
    <div  className="all-products">
      <NavBar />
      <div className="fluid-grid">
        {products.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </div>
    </div >
  );
};
