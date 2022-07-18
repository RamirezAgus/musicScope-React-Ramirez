import React, { createContext, useState, useEffect } from 'react';


export const cartContext = createContext();
const { Provider } = cartContext;


const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [quantityProds, setQuantityProds] = useState(0);

    const getQtyProducts = () => {
        let quantity = 0;
        products.forEach(product => quantity += product.quantity);
        setQuantityProds(quantity)
    }

    useEffect(() => {
        getQtyProducts();
    }, [products]);

    
    const addProducts = (product) => {
        if(isInCart(product.id)){
            const found = products.find(prod => prod.id === product.id);
            const index = products.indexOf(found);
            const aux = [...products];
            aux[index].quantity += product.quantity;
            setProducts(aux);
        }else{
            setProducts([...products, product]);
        }
    };



    const deleteProducts = (id) => { 
        setProducts(products.filter(products => products.id !== id));
    };
     
    
    
    const isInCart = (id) => {
        //const found = found.find(product => product.id === id);
       // return found ? true : false;

       return products.some((prod) => prod.id === id);
    };

    const totalProds = () => {
        return products.reduce((acc, act) => acc + act.price * act.quantity, 0);
    }
    

    const clear = () => {
        setProducts([]);
        setQuantityProds(0);
    };

    return (
        <Provider value={{products, addProducts, deleteProducts, isInCart, clear, quantityProds, totalProds}}>
            {children}
        </Provider>
    )
};

export default CartCustomProvider