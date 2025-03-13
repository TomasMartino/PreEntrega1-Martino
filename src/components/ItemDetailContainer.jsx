import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";

const ItemDetailContainer = () => { 
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://dummyjson.com/products/${productId}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
};

export default ItemDetailContainer;
