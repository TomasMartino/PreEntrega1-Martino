import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
      <ul className="social-icon">
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu-elem">
          <Link to="/" className="menu-icon"> Inicio </Link>
        </li> 
        <li className="menu-elem">
          <Link to="/contact" className="menu-icon"> Contacto </Link>
        </li>
        <li className="menu-elem">
          <Link to="https://github.com/TomasMartino" className="menu-icon"> Github </Link>
        </li>
        <li className="menu-elem">
          <Link to={"https://www.instagram.com/tomas_martino.d/"} target="_blank" className="menu-icon"> Instagram </Link>
        </li>
      </ul>
      <p className="text">@ Copyright 2025 | Tomas Martino</p>
    </footer>
    </div>
  )
}

export default Footer
