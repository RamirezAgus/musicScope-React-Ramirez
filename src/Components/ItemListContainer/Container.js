import React, { useState } from "react";
import Card from "../Card/Card";
import "./Container.css"

const ItemListContainer = ({greeting}) => {

const [amount, setAmount] = useState(0)

    return (
        <div className="landing">
            <span>{greeting}</span>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"><Card /></div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer