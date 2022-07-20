import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';

const Cart = () => {
    const { products, deleteProducts, totalProds } = useContext(cartContext);


    if(products.length === 0){
        return <h2>Carrito vacio!</h2>
    }

    return (
            <div className='d-flex justify-content-center flex-column' style={{maxWidth:'600px'}}>
                {products.map((prod) =>(
                    <div className='d-inline-flex border rounded m-3' key={prod.id}>
                            <img src={prod.img} width='100px' alt='producto'/>
                        <div>
                            <h3>Producto: {prod.name}</h3>
                            <h3>${prod.price}</h3>
                            <h3>Cantidad: {prod.quantity}</h3>
                            <button onClick={() => deleteProducts(prod.id)} className='d-flex justify-content-center btn btn-primary mb-3'>Delete</button>
                        </div>   
                    </div>
                ))}
                <h3>Total: ${totalProds()}</h3>
            </div>
    )
}

export default Cart