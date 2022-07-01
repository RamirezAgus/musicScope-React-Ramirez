import React, { useEffect, useState} from 'react';
import { getItem } from '../../Mocks/fakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

const [info, setInfo] = useState({});
const [loading, setLoading] = useState(true);

useEffect(() => {
    getItem
    .then(res => setInfo(res))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
},[])

    return (
        <div>
            {loading ? <Spinner /> : <ItemDetail info={info} />}
        </div>
    )
}

export default ItemDetailContainer