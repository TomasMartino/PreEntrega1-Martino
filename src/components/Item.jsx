import { Link } from "react-router-dom"
import "./Item.css"  
import { useEffect } from "react";
import { useRef } from "react";
import Swiper from "swiper";

const Item = (props) => {
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

    
    return (
        <div className=" product-card" ref={swiperRef}>
        <div className="swiper-wrapper">
           
            <div 
              className={`swiper-slide `}
              style={{ backgroundImage: `url(${props.producto.thumbnail})` }}
            >
              <span>{props.producto.title}</span>
              <div>
                <h2 className="price">
                  Price: <strong>{props.producto.price}</strong><br />
                  <Link to={`/producto/${props.producto.id}`}>ver detalle</Link>
                </h2>
              </div>
            </div>
           
        </div>
      </div>
        
        // <article className="product-card swiper-slide">
        //     <h3 className="product-card__title">{props.producto.title}</h3>
        //     <img src={props.producto.thumbnail} alt={props.producto.title} />
        //     <span>{props.producto.category}</span>
        //     <p className="product-card__description">${props.producto.price}</p>
        //     <Link to={`/producto/${props.producto.id}`}>ver detalle</Link>
        // </article>
    )
}

export default Item