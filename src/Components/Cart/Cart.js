import React, { useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { db } from "../../Firebase/firebase";
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore';

const Cart = () => {
    const { products, deleteProducts, totalProds } = useContext(cartContext);
    const [idOrder, setIdOrder] = useState("")

const order = {
    buyer: {
        name: 'Agustin',
        mail: 'agustin@gmail.com',
        phone: '1143568859',
        adress: 'asdasdasd'
    },
    items: products.map(prod => ({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: prod.quantity,
        
    })),
    date: serverTimestamp(),
    total: totalProds(),
}

const handleClick = () => {
    const ordersCollection = collection(db, 'order');
    addDoc(ordersCollection, order)
    .then((res) => {
        setIdOrder(res.id)
        console.log(res.id)
    })
}


    if(products.length === 0){
        return <h2>Carrito vacio!</h2>
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='d-flex flex-column justify-content-center align-items-center flex-wrap'>
                {products.map((prod) =>(
                    <div className='d-inline-flex border rounded m-3 ' style={{maxWidth:'400px'}} key={prod.id}>
                        <div className='card-img'>
                            <img src={prod.img} style={{width: '80%', height: 'auto'}} alt='producto'/>
                        </div>        
                      <div className='col-md-8'>      
                        <div className='card-body'>
                            <h3 className='card-text'>Producto: {prod.name}</h3>
                            <h4 className='card-text'>${prod.price}</h4>
                            <h4 className='card-text'>Cantidad: {prod.quantity}</h4>
                            <button onClick={() => deleteProducts(prod.id)} className='d-flex justify-content-center btn btn-primary mb-3'>Delete</button>
                        </div>
                      </div>     
                    </div>
                ))}
                <h3>Total: ${totalProds()}</h3>
                <button onClick={handleClick} className='btn btn-primary'>Comprar!</button>
            </div>
            </div>
    )
}

export default Cart