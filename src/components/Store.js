import React,{ useContext } from 'react';
//components
import Product from './shared/Product';
//context
import { ProductsContext } from '../context/ProductsContextProvider';
//css
import styles from "./styles/store.module.css";
const Store = () => {
    const productsData = useContext(ProductsContext);
        
    return (
        <div className={styles.store}>
            {
                productsData.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;