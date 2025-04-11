import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const miContexto = createContext(); //Aca esta el contexto
export const MiProvider = miContexto.Provider; //Aca esta el provider

const CustomContext = (props) => {
  const [cantProd, setCantProd] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [totalPrecio, setTotalPrecio] = useState(
    carrito.length > 0
      ? carrito.reduce((total, p) => total + p.precio * p.cantidad, 0)
      : 0
  );
  useEffect(() => {
    const calcularTotalPrecio = () => {
      const total = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
      setTotalPrecio(total);
    };
    calcularTotalPrecio();
  }, [carrito]);

  const handleAgregar = (producto) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      setCarrito(
        carrito.map((p) => {
          if (p.id === producto.id) {
            return { ...p, cantidad: p.cantidad + 1 };
          }
          return p;
        })
      );
      setCantProd(cantProd + 1);
      setTotalPrecio(totalPrecio + producto.precio);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      setCantProd(cantProd + 1);
      setTotalPrecio(totalPrecio + (producto.precio ? producto.precio : 0));
    }
  };

  const handleEliminar = (producto) => {
    console.log('Se ha hecho clic en el botón de eliminar producto');
    console.log('Carrito:', carrito);
    console.log('Producto _id:', producto._id);
  
    const productoExistente = carrito.find((p) => p.id === producto.id);
    console.log('Producto existente:', productoExistente);
    if (productoExistente) {
      if (productoExistente.cantidad > 1) {
        setCarrito(
          carrito.map((p) => {
            if (p.id === producto.id) {
              return { ...p, cantidad: p.cantidad - 1 };
            }
            return p;
          })
        );
        setCantProd(cantProd - 1);
        setTotalPrecio(totalPrecio - producto.precio);
        // Actualiza el localStorage
        const productosEnCarrito = localStorage.getItem("productosEnCarrito");
        const productosEnCarritoArray = productosEnCarrito
          ? JSON.parse(productosEnCarrito)
          : [];
        const indice = productosEnCarritoArray.findIndex(
          (p) => p.id === producto.id
        );
        productosEnCarritoArray[indice].cantidad -= 1;
        localStorage.setItem(
          "productosEnCarrito",
          JSON.stringify(productosEnCarritoArray)
        );
      } else {
        const nuevoCarrito = carrito.filter((p) => p.id !== producto.id);
        setCarrito(nuevoCarrito);
        
        setCantProd(cantProd - 1);
        setTotalPrecio(
          nuevoCarrito.reduce((total, p) => total + p.precio * p.cantidad, 0)
        );
        // Actualiza el localStorage
        const productosEnCarrito = localStorage.getItem("productosEnCarrito");
        const productosEnCarritoArray = productosEnCarrito
          ? JSON.parse(productosEnCarrito)
          : [];
        const nuevoArray = productosEnCarritoArray.filter(
          (p) => p.id !== producto.id
        );
        localStorage.setItem("productosEnCarrito", JSON.stringify(nuevoArray));
      }
    }
  };








  
  const valorDelContexto = {
    cantProd,
    carrito,
    totalPrecio,
    handleAgregar,
    handleEliminar,
  };
  return <MiProvider value={valorDelContexto}>{props.children}</MiProvider>;
};
export default CustomContext;
