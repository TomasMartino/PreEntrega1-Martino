import NavBar from "./NavBar";
import { miContexto } from "./CustomContext";
import { useContext } from "react";
import { useState } from "react"; 
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { app } from "../ImportarProductos";

function Carrito() {
  const valor = useContext(miContexto);
  const { handleEliminar } = useContext(miContexto);

  const productosEnCarrito = localStorage.getItem('productosEnCarrito');
  const productosEnCarritoArray = productosEnCarrito ? JSON.parse(productosEnCarrito) : [];

  const productosFusionados = productosEnCarritoArray.reduce((acumulado, producto) => {
    const productoExistente = acumulado.find((p) => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      acumulado.push({ ...producto, cantidad: 1 });
    }
    return acumulado;
  }, []);

  const totalPrecio = productosFusionados.reduce((acumulado, producto) => {
    return acumulado + producto.price * producto.cantidad;
  }, 0);
  

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
 console.log (productosFusionados);
  return (
    <div>
      <NavBar />
      <div>
        <h1>Carrito</h1>
        <p>cantidad de productos: {valor.cantProd}</p>
        <p>Total: ${totalPrecio}</p>
        <ul>
          {productosFusionados.map((producto, index) => (
            <li key={index}>
              <img style={{ width: "100px" }} src={producto.images} alt="" />
              <p>Nombre: {producto.title}</p>
              <p>Precio: {producto.price}</p>
              <p>Cantidad: {producto.cantidad}</p>
              <button onClick={() => handleEliminar(producto)}>Eliminar</button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <h2>Información del comprador</h2>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
          <button type="submit">Realizar compra</button>
        </form>
      </div>
    </div>
  );
}

export default Carrito;
