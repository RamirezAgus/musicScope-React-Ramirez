import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import "./Item.css"



const Item = ({ item }) => {

    const { products } = useContext(cartContext);

    const isInCart = products.some((prod) => prod.id === item.id)

    return (
        <div className='card align-items-center' id='cards' style={{width:'10rem', height:'auto' ,margin:'1.5rem'}}>
            <img src={item.img} className='card-img-top' alt='producto'></img>
            <div className='card-body'>
                <p className='card-text h5 text-center'>{item.name}</p>
                <p className='card-text text-center'>{item.description}</p>
            </div>
            <Link to={`/detail/${item.id}`}  className='btn btn-primary mb-3' id='boton-ver'>Ver más</Link>
            {isInCart && <h2>Ya esta en el carrito</h2>}
        </div>
    )
}

export default Item