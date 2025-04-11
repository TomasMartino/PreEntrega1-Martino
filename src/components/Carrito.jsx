import NavBar from "./NavBar";
import { miContexto } from "./customContext";
import "./carrito.css";
import { useContext } from "react";
import { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { app } from "../ImportarProductos";

function Carrito() {
  const valor = useContext(miContexto);
  const { handleEliminar } = useContext(miContexto);

  const productosEnCarrito = localStorage.getItem("productosEnCarrito");
  const productosEnCarritoArray = productosEnCarrito
    ? JSON.parse(productosEnCarrito)
    : [];

  const productosFusionados = productosEnCarritoArray.reduce(
    (acumulado, producto) => {
      const productoExistente = acumulado.find((p) => p.id === producto.id);
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        acumulado.push({ ...producto, cantidad: 1 });
      }
      return acumulado;
    },
    []
  );

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar la compra

    const db = getFirestore(app);
    const checkOutCollection = collection(db, "CheckOut");

    const compra = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      direccion: direccion,
      telefono: telefono,
      productos: productosFusionados,
      total: totalPrecio,
    };

    const miConsulta = addDoc(checkOutCollection, compra);

    miConsulta
      .then(() => {
        console.log("Compra registrada con éxito!");
      })
      .catch(() => {
        console.log("Error al registrar la compra");
      });
  };

  const totalPrecio = productosFusionados.reduce((acumulado, producto) => {
    return acumulado + producto.price * producto.cantidad;
  }, 0);

  const handleSumaResta = (producto) => {
    const cantidad = productosContadores[producto.id] || 0;
    setProductosContadores({
      ...productosContadores,
      [producto.id]: cantidad + 1,
    });
    if (valor.cantProd === 1) {
      setTotal(0);
    } else {
      setTotal(total - producto.price);
    }
  };
  const [productosContadores, setProductosContadores] = useState({});
  const [total, setTotal] = useState(totalPrecio);

  return (
    <div className="">
      <NavBar />

      <div className="carrito-content carrito-container">
        <h1 className="carrito-title">Carrito</h1>
        <p className="carrito-cantidad">
          Cantidad de productos: {valor.cantProd}
        </p>
        <p className="carrito-total">Total: ${total}</p>
        <ul className="carrito-lista">
          {productosFusionados.map((producto, index) => (
            <li key={index} className="carrito-item">
              <img
                className="carrito-imagen"
                style={{ width: "100px" }}
                src={producto.images}
                alt=""
              />
              <p className="carrito-nombre">Nombre: {producto.title}</p>
              <p className="carrito-precio">Precio: {producto.price}</p>
              <p className="carrito-cantidad colorP">
                Cantidad:
                {producto.cantidad - (productosContadores[producto.id] || 0)}
              </p>
              <button
                className="carrito-eliminar"
                onClick={() => {
                  handleEliminar(producto, index);
                  handleSumaResta(producto);
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="carrito-form">
          <h2 className="carrito-form-title">Información del comprador</h2>
          <label className="carrito-form-label">
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="carrito-form-input"
            />
          </label>
          <label className="carrito-form-label">
            Apellido:
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="carrito-form-input"
            />
          </label>
          <label className="carrito-form-label">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="carrito-form-input"
            />
          </label>
          <label className="carrito-form-label">
            Dirección:
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="carrito-form-input"
            />
          </label>
          <label className="carrito-form-label">
            Teléfono:
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="carrito-form-input"
            />
          </label>
          <button type="submit" className="carrito-form-button">
            Realizar compra
          </button>
        </form>
      </div>
    </div>
  );
}

export default Carrito;
