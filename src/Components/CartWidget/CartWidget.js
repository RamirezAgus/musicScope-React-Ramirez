import React from "react";
import "./CartWidget.css"
import imagenCarrito from "../../assets/img others/shopping-cart.png"
const CartWidget = () => {
    return (
        <button type="button" className="btn">
            <img src={imagenCarrito} alt="carrito" className="cart-widget" />
        </button>
    )
}


export default CartWidget