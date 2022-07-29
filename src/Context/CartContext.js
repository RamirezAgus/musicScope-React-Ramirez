import React, { createContext, useState, useEffect } from 'react';


export const cartContext = createContext();
const { Provider } = cartContext;


const CartCustomProvider = ({ children }) => {

    const [productsCart, setProductsCart] = useState([]);
    const [quantityProds, setQuantityProds] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const getQtyProducts = () => {
        let quantity = 0;
        productsCart.forEach(product => quantity += product.quantity);
        setQuantityProds(quantity)
    };

    const getTotalProducts = () => {
        let total = 0;
        productsCart.forEach((prod) => (total += prod.quantity * prod.price));
        setTotalProducts(total)
    };


    useEffect(() => {
        getTotalProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsCart]);

    useEffect(() => {
        getQtyProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsCart]);

    
    const addProducts = (product) => {
        if(isInCart(product.id)){
            const found = productsCart.find(prod => prod.id === product.id);
            const index = productsCart.indexOf(found);
            const aux = [...productsCart];
            aux[index].quantity += product.quantity;
            setProductsCart(aux);
        }else{
            setProductsCart([...productsCart, product]);
        }
    };



    const deleteProducts = (id) => { 
        setProductsCart(productsCart.filter(products => products.id !== id));
    };
     
    
    
    const isInCart = (id) => {
               return productsCart.some((prod) => prod.id === id);
    };
 

    const clear = () => {
        setProductsCart([]);
        setQuantityProds(0);
        setTotalProducts(0);
    };

    return (
        <Provider value={{productsCart, addProducts, deleteProducts, isInCart, clear, quantityProds, totalProducts}}>
            {children}
        </Provider>
    )
};

export default CartCustomProvider