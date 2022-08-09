import React, {useState, useEffect} from "react";
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));

    }, [initial])

    return (
        <div className="counter">
            <div className="buttons">
                <button disabled={count <= 1} onClick={decrease} className="" id="count">-</button>
                <span id="number">{count}</span>
                <button disabled={count >= stock} onClick={increase} className="" id="count">+</button>
            </div>
            <div id="add-cart">
                <button className="btn btn-primary" id="add" disabled={stock <= 0} onClick={() => onAdd(count)} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount