import React from "react";
import Card from "../Card/Card";
import "./Container.css"

const ItemListContainer = ({greeting}) => {



    return (
        <div className="landing">
            <span>{greeting}</span>
            <div className="contenedor">
                <div>
                    <div></div>
                    <div><Card /></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer