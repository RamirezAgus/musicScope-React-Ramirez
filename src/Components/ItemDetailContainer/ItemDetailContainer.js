import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../Mocks/fakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = () => {

const [product, setProduct] = useState({});
const [loading, setLoading] = useState(true);

const {id} = useParams();

useEffect(() => {
    setLoading(true);

    getItem(id)
    .then(res => setProduct(res))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
},[id])

    return (
        <div>
           {loading ? <Spinner /> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer