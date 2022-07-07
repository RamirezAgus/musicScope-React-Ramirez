import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false)
    const {name, price, description, img, stock} = product;

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return (
        <div className='container card mb-3' style={{maxWidth:'640px'}}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img className='card-img' src={img} alt=''/>
                </div>    
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h2 className='card-tittle text-center'>{name}</h2>
                            <h1>${price}</h1>
                            <p className='card-text'>{description}</p>
                            {
                                goToCart 
                                ? 
                                <Link to='/cart'>Finalizar compra!</Link>
                                : <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                            }
                            
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default ItemDetail