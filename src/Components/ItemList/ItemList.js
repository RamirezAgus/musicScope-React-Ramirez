import React from 'react';
import Item from '../Item/Item';
import "./ItemList.css"

const ItemList = ({ items }) => {
    return(
        <div className='d-flex justify-content-center align-items-center flex-wrap'>
            {items.map((item) => ( <Item key={item.id} item={item} />))}
        </div>
    )
}

export default ItemList