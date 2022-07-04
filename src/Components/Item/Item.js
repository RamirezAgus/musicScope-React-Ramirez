import React from 'react';
import "./Item.css"

const Item = ({products}) => {

    const {name, description, img} = products

    return (
        <div className='card align-items-center' style={{width:'10rem', margin:'1.5rem'}}>
            <img src={img} className='card-img-top' alt=''></img>
            <div className='card-body'>
                <p className='card-text h5 text-center'>{name}</p>
                <p className='card-text'>{description}</p>
            </div>
            <button className='btn btn-primary mb-3' id='boton-ver'>Ver más</button>
        </div>
    )
}

export default Item