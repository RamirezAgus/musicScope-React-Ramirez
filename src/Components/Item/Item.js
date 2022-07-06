import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css"

const Item = ({products}) => {

    const {id, name, description, img} = products

    return (
        <div className='card align-items-center' style={{width:'10rem', margin:'1.5rem'}}>
            <img src={img} className='card-img-top' alt=''></img>
            <div className='card-body'>
                <p className='card-text h5 text-center'>{name}</p>
                <p className='card-text'>{description}</p>
            </div>
            <Link to={`/detail/${id}`}  className='btn btn-primary mb-3' id='boton-ver'>Ver más</Link>
        </div>
    )
}

export default Item