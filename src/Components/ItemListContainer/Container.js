import React from "react";
import Card from "../Card/Card";
import "./Container.css"

const ItemListContainer = ({greeting}) => {

    const products = [
        {id:'01', name: 'Gibson LesPaul Custom', desc: 'Custom Made', price: '90000', stock: '8'}
    ];

    const getData = new Promise ((resolve, reject) => {

        let condition = true;
        setTimeout(() => {
            if(condition){
                resolve(products);
            }else{
                reject(console.log('salio mal :('));
            }
        }, 3000);
    });
    console.log(getData);



    return (
        <div className="landing">
            <span>{greeting}</span>
            <div className="contenedor">
                <div>
                    <div></div>
                    <div><Card /></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer