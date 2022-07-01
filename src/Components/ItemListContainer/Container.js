import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getData } from "../../Mocks/fakeApi";
import "./Container.css"
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData
        .then((res) => setProductList(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    },[])


    return (
        <div className="d-flex flex-column">
            <span className="d-flex justify-content-center">{greeting}</span>
            <div className="d-flex flex-row justify-content-center">
            
                {loading ? <Spinner /> : <ItemList productList={productList} />}  
            </div>
            
        </div>
    )
}

export default ItemListContainer