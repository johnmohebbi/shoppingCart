import React,{useContext, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
//functions

//context
import { ProductsContext } from '../../context/ProductsContextProvider';
import { shorten } from '../../helper/functions';
const Details = () => {
    const {id} = useParams()
    const products = useContext(ProductsContext);
    const dataProduct = products[id - 1]
    console.log(dataProduct);
    return (
        <div>
            
            <div>
                <img src={dataProduct.image} alt="imageDetails" width="200px" />
                <div>
                    <h3><span>title:</span>{shorten(dataProduct.title)}</h3>
                    <p><span>category:</span> {dataProduct.category}</p>
                    <p><span>category:</span> {dataProduct.description}</p>
                    <p>{dataProduct.price}</p>
                </div>
            <Link to="/products">go to products</Link>
            </div>
        </div>
    );
};

export default Details;
