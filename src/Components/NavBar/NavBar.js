import React from "react";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

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
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <Logo />
                <ul>
                    {categories.map((cat) => (
                    <Link to={cat.path} className="nav-item" id="select" key={cat.id}>{cat.name}</Link>
                    ))}
                </ul>
                <div className="d-flex" id="search">
                    <SearchBar />
                </div>
                <CartWidget />
        </nav>
    
    )
}


export default NavBar