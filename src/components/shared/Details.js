import React,{useContext, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
//functions

//context
import { ProductsContext } from '../../context/ProductsContextProvider';
// import { shorten } from '../../helper/functions';
//css
import styles from './styles/details.module.css'
const Details = () => {
    const {id} = useParams()
    const products = useContext(ProductsContext);
    const dataProduct = products[id - 1]
    return (
        
        <div className={styles.detailsContainer}>
            <img src={dataProduct.image} alt="imageDetails" />
            <div className={styles.detailsBody}>
                <h3><span>title:</span>{dataProduct.title}</h3>
                <p className={styles.detailsDescription}><span>description:</span> {dataProduct.description}</p>
                <p className={styles.detailsCategory}><span>category:</span> {dataProduct.category}</p>
                <section>
                    <p>{dataProduct.price} $</p>
                    <Link to="/products">go to products</Link>
                </section>
            </div>
        </div>
        
    );
};

export default Details;
