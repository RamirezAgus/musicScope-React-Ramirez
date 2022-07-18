import React, { useContext } from "react";
import "./CartWidget.css"
import imagenCarrito from "../../assets/img others/shopping-cart.png"
import { cartContext } from "../../Context/CartContext";


const CartWidget = () => {

    const {quantityProds} = useContext(cartContext);

    return (
        <>
            <button type="button" className="btn">
                <img src={imagenCarrito} alt="carrito" className="cart-widget" />
            </button>
            <p>{quantityProds}</p>
        </>
    )
}


export default CartWidget