import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/UI/Navbar";
import logo from "../../Assets/Images/Main-logo.png"; // Replace with the actual path to your logo image
import "../../Assets/CSS/Header.css";  // Import the CSS file

function Header() {
  return (
    <header>
      <div>
        <Link to="/home">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
