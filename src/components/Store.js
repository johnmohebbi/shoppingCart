import React,{ useContext } from 'react';
//components
import Product from './shared/Product';
//context
import { ProductsContext } from '../context/ProductsContextProvider';
const Store = () => {
    const productsData = useContext(ProductsContext);
    
    return (
        <div style={{display:"flex",flexWrap:"Wrap", justifyContent:"space-around"}}>
            {
                productsData.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;