import React from 'react';
import Item from '../Item/Item';
import "./ItemList.css"

const ItemList = ({productList}) => {
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
            {productList.map((products) =><Item key={products.id} products={products}/>)}
        </div>
    )
}

export default ItemList