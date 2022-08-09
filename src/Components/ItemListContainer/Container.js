import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { db } from "../../Firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true);

        const q = categoryId 
        ? query(collection(db, 'productos'), where('category', '==', categoryId))
        : collection(db, 'productos');


        getDocs(q)
        .then(res => {
            const list = res.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProducts(list);
        })
        .catch((error) => {console.log(error)})
        .finally(() => {setLoading(false)})
    },[categoryId]);


    return (

        <div className="d-flex flex-column">
            <span className="d-flex justify-content-center h1 mt-2">{greeting}</span>
                {loading ? (<Spinner />) : (<ItemList items={products} />)}
        </div>
    )
}

export default ItemListContainer