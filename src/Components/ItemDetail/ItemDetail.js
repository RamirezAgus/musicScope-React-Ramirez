import React from 'react';

const ItemDetail = ({ info }) => {
    return (
        <div className='container'>
            <div className='detail'>
                <img className='detail-img' src={info.img} alt=''/>
                <div className='content'>
                    <h1>{info.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail