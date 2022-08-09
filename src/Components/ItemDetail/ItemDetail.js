import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';

const ItemDetail = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false)
    const {name, price, description, img, stock} = product;
    const { addProducts } = useContext(cartContext);
    

    const onAdd = (count) => {
        addProducts({...product, quantity: count})
        setGoToCart(true);
        
    }

    return (
        <div className='container-md card mb-3 mt-4' style={{maxWidth:'640px'}}>
            <div className='row no-gutters'>
                <div className='d-flex align-items-center col-md-4'>
                    <img className='card-img' src={img} alt=''/>
                </div>    
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h2 className='card-tittle text-center'>{name}</h2>
                            <h1>${price}</h1>
                            <span>Cantidad: {stock}</span>
                            <p className='card-text'>{description}</p>
                            { goToCart ? <Link to='/cart' className='btn btn-primary'>Ir al carrito!</Link> : <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                            }
                            
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default ItemDetail