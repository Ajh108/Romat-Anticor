import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import img from "../logo/Logo.JPG"

export default function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = "drop-down-menu";
  if (isDisplayed) {
    dropdownMenuClasses += " mobile-menu";
  }
  return (
    <header className="Header">
      <nav className="nav w-100">
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-4">
            <img src={img} alt=""/>
          </Link>
          <div className="menu-icon-container">
            <span
              onClick={handleMenuClick}
              className="material-icons menu-icon text-light"
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
                <li className={isDisplayed ? "container" : null}>
                    <Link to="/portofoliu" className="navbar-text p-4">
                        Portofoliu
                    </Link>
                </li>
                <li className={isDisplayed ? "container" : null}>
                    <Link to="/servicii&parteneri" className="navbar-text p-4">
                        Servicii si Parteneri
                    </Link>
                </li>
                <li className={isDisplayed ? "container" : null}>
                    <Link to="/contact" className="navbar-text p-4">
                        Contact
                    </Link>
                </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}