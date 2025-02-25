import { useState } from "react";
import styles from "./Navbar.module.css";
import CartWidget from './CartWidget';

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
          <a href="#home" className={`${styles.logo}`}>
            Voga{" "}
          </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a href="#home" >
                Home
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" >
                All products
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" >
                Contact
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" >
              <CartWidget/>
              </a>
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
