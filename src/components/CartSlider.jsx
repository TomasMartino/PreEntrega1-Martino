import "./CartSlider.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Swiper from "swiper"; 
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { app } from "../ImportarProductos.js";

function CartSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    new Swiper(swiperRef.current, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      spaceBetween: 60,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");
  
    const miConsulta = getDocs(productosCollection);
  
    const productoConFormato = [];
  
    miConsulta
      .then((respuesta) => {
        respuesta.docs.forEach((doc) => {
          productoConFormato.push(doc.data());
          setProducts(productoConFormato);
        })
      })
      .catch(() => {
        console.log("Error al cargar los productos");
      })
  }, []);

  return (
    <section>
      <div className="title-novedades">
        <h2>Tendencias Voga</h2>
      </div>
      <div className="swiper " ref={swiperRef}>
        <div className="swiper-wrapper">
          {products.map((product, index) => (
            <div
              key={index}
              className={`swiper-slide swiper-slide--${index + 1}`}
              style={{ backgroundImage: `url(${product.images})` }}
            >
              <span>{product.title}</span>
              <div>
                <h2 className="price">
                  Price: <strong>{product.price}</strong>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartSlider;
