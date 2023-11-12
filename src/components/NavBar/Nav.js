import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">About me</a>
        <input className="searchBar"
          type="text"
          placeholder="Search..."
        />
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
