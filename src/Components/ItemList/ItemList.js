import React from 'react';
import Item from '../Item/Item';
import "./ItemList.css"

const ItemList = ({productList}) => {
    return(
        <div className='d-flex justify-content-center align-items-center flex-wrap'>
            {productList.map((products) =><Item key={products.id} products={products}/>)}
        </div>
    )
}

export default ItemList