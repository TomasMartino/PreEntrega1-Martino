import { useState } from "react";
import styles from "./Navbar.module.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to="/" className={`${styles.logo}`}>
            Voga
          </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/itemListContainer">All products</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
