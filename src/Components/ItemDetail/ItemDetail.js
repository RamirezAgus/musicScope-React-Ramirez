import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({ product }) => {

    const {name, price, description, img} = product;

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div className='container card mb-3' style={{maxWidth:'640px'}}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img className='card-img' src={img} alt=''/>
                </div>    
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h2 className='card-tittle text-center'>{name}</h2>
                            <h1>${price}</h1>
                            <p className='card-text'>{description}</p>
                            <ItemCount initial={1} stock={5} onAdd={onAdd} />
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default ItemDetail