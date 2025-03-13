import { Link } from "react-router-dom"
import "./Item.css"

const Item = (props) => {

    
    return (
        <article className="product-card" title={props.producto.title}>
            <h3 className="product-card__title">{props.producto.title}</h3>
            <img src={props.producto.thumbnail} alt={props.producto.title} />
            <p className="product-card__description">${props.producto.price}</p>
            <Link to={`/producto/${props.producto.id}`}>ver detalle</Link>
        </article>
    )
}

export default Item