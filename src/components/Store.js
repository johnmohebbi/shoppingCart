import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
//components
import Product from './shared/Product';
//actions
import { fetchProducts } from '../redux/products/productsAction';
//css
import styles from "./styles/store.module.css";
import Loader from './Loader';
const Store = () => {
    const dispatch = useDispatch()
    const productsData = useSelector(state => state.productsState);
    useEffect(()=>{
        if ( !productsData.products.length ){
            dispatch(fetchProducts())
       } 

    },[])
    return (
        <div className={styles.store}>
            {
                productsData.loading ?
                <Loader />:
                productsData.error ?
                <h2>{productsData.error}</h2>:
                productsData.products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;