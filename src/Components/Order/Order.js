
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import { db } from '../../Firebase/firebase';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';



const Order = () => {
    const { productsCart, deleteProducts, totalProducts } = useContext(cartContext);
    const [idOrder, setIdOrder] = useState("");
    let navigate = useNavigate();
    const initialValues = {
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
    };

    const [values, setValues] = useState(initialValues);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    };

    const dataBuyer = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        endBuy();
    };

    const endBuy = () => {
        const orderCollection = collection(db, 'order');
        addDoc(orderCollection, {
            dataBuyer,
            items: productsCart,
            date: serverTimestamp(),
            total: totalProducts,
        }).then((res) => {
            setIdOrder(res.id)
        });

        productsCart.forEach((prod) => {
            const updateCollection = doc(db, 'productos', prod.id)
            updateDoc(updateCollection, { stock: prod.stock - prod.quantity });
        });
    };

    


    const sendBuy = () => {
        swal({
            title: "Confirmacion de compra",
            text: `Recibimos su pedido, su identificador es ${idOrder} `,
            icon: "success",
            button: "Aceptar",
          })
          .then((res) => {
            if (res.isConfirmed) {
              deleteProducts();
              return navigate('/');
            } 
          });
    };

    useEffect(() => {
        if(idOrder){
            sendBuy();
        }
    }, [idOrder]);


    return (
        <div className='container-form mt-5'>
            <div className='row'>
                <form className='card card-body' onSubmit={handleSubmit}>
                    <h2>Ingreso de datos</h2>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control mb-3' 
                            placeholder='Ingresar nombre'
                            name='nombre'
                            onChange={handleInputChange}
                            required    
                            />
                        <input 
                            type='text' 
                            className='form-control mb-3'
                            placeholder='Ingrese apellido'
                            name='apellido'
                            onChange={handleInputChange}
                            required    
                            />
                        <input 
                            type='text'
                            className='form-control mb-3'
                            placeholder='ingrese email'
                            name='email'
                            onChange={handleInputChange}
                            required 
                            />   
                        <input 
                            type='number'
                            className='form-control mb-3'
                            placeholder='Ingrese numero de telefono'
                            name='telefono'
                            onChange={handleInputChange}
                            required 
                        />         
                    </div>
                    <button className='btn btn-primary'>Enviar compra</button>
                </form>
            </div>

        </div>
    )
}


export default Order