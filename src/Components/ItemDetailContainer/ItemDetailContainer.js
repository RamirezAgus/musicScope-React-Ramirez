import React, { useEffect, useState} from 'react';
import { getDoc, doc, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
//mport { getItem } from '../../Mocks/fakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { db } from '../../Firebase/firebase';


// 1- Traer el servicio de firestore
// 2- Crear un puntero al dato que queremos traer
// 3- Traer el dato con una promesa



const ItemDetailContainer = () => {

const [product, setProduct] = useState({});
const [loading, setLoading] = useState(true);

const {id} = useParams();

useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, 'productos')
    const refDoc = doc(productsCollection, id)
    getDoc(refDoc)
    .then(res => {
        setProduct({
            id: res.id,
            ...res.data(),
        })
    })
    .catch((error) => {console.log(error)})
    .finally(() => {setLoading(false)})
}, [id])

    return (
        <div>
           {loading ? <Spinner /> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer