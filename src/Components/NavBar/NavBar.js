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
        
        <nav className="d-flex justify-content-around navbar navbar-expand-lg navbar-light" >
            <Logo />
                <ul>
                    {categories.map((cat) => (
                    <Link to={cat.path} className="nav-item" id="select" key={cat.id}>{cat.name}</Link>
                    ))}
                </ul>

                <Link className="d-flex align-items-center" to="/cart"><CartWidget /></Link>
        </nav>
    
    )
}


export default NavBar