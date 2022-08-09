import React, { useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Order from '../Order/Order';


const Cart = () => {
    const { productsCart, deleteProducts, totalProducts } = useContext(cartContext);
    const [ buyFinalized, setBuyFinalized ] = useState(false);

    const endBuy = () => {
        setBuyFinalized(true);
    };



    if(productsCart.length === 0){
        return (
            <div className='container'>
                <h2>Carrito vacio!</h2>
                <Link to='/' className='btn btn-primary'>Ir a comprar</Link>
            </div>
        
        )};

    return (
        <div className='d-flex justify-content-center'>
            <div className='d-flex flex-column justify-content-center align-items-center flex-wrap'>
                {productsCart.map((prod) =>(
                    <div className='d-inline-flex border rounded m-3 ' style={{maxWidth:'400px'}} key={prod.id}>
                        <div className='card-img'>
                            <img src={prod.img} style={{width: '80%', height: 'auto'}} alt='producto'/>
                        </div>        
                      <div className='col-md-8'>      
                        <div className='card-body'>
                            <h3 className='card-text'>Producto: {prod.name}</h3>
                            <h4 className='card-text'>${prod.price}</h4>
                            <h4 className='card-text'>Cantidad: {prod.quantity}</h4>
                            <button onClick={() => deleteProducts(prod.id)} className='d-flex justify-content-center btn btn-primary mb-3'>Borrar</button>
                        </div>
                      </div>     
                    </div>
                ))}
                <h3>Total: ${totalProducts}</h3>
                
            </div>
            <div>
                { buyFinalized  ? (
                   <Order />
                ) : (
                    <div className="d-flex flex-row align-item-center justify-content-center mt-3">
                        <button onClick={endBuy} className='btn btn-primary'>Finalizar compra!</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
