import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css"

const Item = ({products}) => {

    const {name, description, price, img} = products

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div className='card' style={{width:'20rem', margin:'.5rem'}}>
            <img src={img} className='card-img-top' alt=''></img>
            <div className='card-body'>
                <p className='card-text'>{name}</p>
                <p className='card-text'>{description}</p>
                <p className='card-text'>{price}</p>
            </div>
            <button className='btn btn-primary'>Ver más</button>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default Item