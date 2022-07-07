import React from "react";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";
import { Link } from "react-router-dom";

const categories = [
    {
        id: 1,
        path: '/',
        name: 'home',
    },
    {
        id: 2,
        path: '/category/instrumentos',
        name: 'instrumentos',
    },
    {
        id: 3,
        path: '/category/amplificadores',
        name: 'amplificadores',
    },
    {
        id: 4,
        path: '/category/efectos',
        name: 'efectos',
    },
];

const NavBar = () => {
    return (
        
        <nav>
            <Logo />
                <ul>
                    {categories.map((cat) => (
                    <Link to={cat.path} className="nav-item" id="select" key={cat.id}>{cat.name}</Link>
                    ))}
                </ul>
                <div className="d-flex" id="search">
                    <input className="form-control me-1"  type="text" placeholder="Buscar Producto" aria-label="Search"/>
                </div>
                <CartWidget />
        </nav>
    
    )
}


export default NavBar