import React from "react";
import "../styles/Header.css";
import logo from '../assets/omega.svg'

function Header() {
    return (
        <header className="header">
            <h1>Zegarek Omega Speedmaster Moonwatch Professional </h1>
            <img src={logo} alt="Example" className="content-image" />
        </header>
    );
}

export default Header;
