import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getData } from "../../Mocks/fakeApi";
import { useParams } from "react-router-dom";
import "./Container.css"
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);

        getData(categoryId)
        .then((res) => {setProductList(res)})
        .catch((error) => {console.log(error)})
        .finally(() => {setLoading(false)})
    },[categoryId]);


    return (

        <div className="d-flex flex-column">
            <span className="d-flex justify-content-center h1 mt-2">{greeting}</span>
                {loading ? (<Spinner />) : (<ItemList productList={productList} />)}
        </div>
    )
}

export default ItemListContainer