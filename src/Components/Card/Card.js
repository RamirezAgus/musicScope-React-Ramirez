import React from "react";
import "./Card.css"
import gibsonLesPaul from "../../assets/images/gibsonLesPaul.png"
import ItemCount from "../ItemCount/ItemCount";

const Card = () => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <section className="card" id="tarjeta">
            <img src={gibsonLesPaul} className="card-img-top" alt="guitarra"/>
            <div className="card-body" id="tarjeta-body">
                <h5 className="card-title">Gibson LesPaul Custom</h5>
                <p className="card-text"></p>
                <p className="card-text">Precio: $<span className="price">90000</span></p>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>    
        </section>
    )

}

export default Card