import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const params = useParams();
  const productId = params.id;

  // Utiliza el productId para obtener los detalles del producto
  const url = `https://dummyjson.com/products/${productId}`;
  console.log(url);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setProduct(res.product);
      // Utiliza el producto para renderizar los detalles
      return (
        <div>
          {product.find((product) => product.id === productId).title}
        </div>
      );
    });
};

export default ProductDetailContainer;
