import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./NavBar.css";



const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg" id="navheader">
            <div className="container-fluid">
                <Logo />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Intrumentos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Amplificadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Efectos</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex" id="search">
                    <input className="form-control me-1"  type="text" placeholder="Buscar Producto" aria-label="Search"/>
                </div>
            </div>
            <CartWidget />
        </header>
    )
}


export default NavBar