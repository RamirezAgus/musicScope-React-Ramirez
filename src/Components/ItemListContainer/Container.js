import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getData } from "../../Mocks/fakeApi";
import "./Container.css"

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData
        .then((res) => setProductList(res))
        .catch((error) => console.log('error'))
        .finally(() => setLoading(false))
    },[])


    return (
        <div className="landing">
            <span>{greeting}</span>
            <div className="contenedor">
                {loading ? <p>Cargando...</p> : <ItemList productList={productList} />}  
            </div>
        </div>
    )
}

export default ItemListContainer