import React,{ useContext } from 'react';
//components
import Product from './shared/Product';
//context
import { ProductsContext } from '../context/ProductsContextProvider';
import { CartContext } from '../context/CartContextProvider';

const Store = () => {
    const productsData = useContext(ProductsContext);
    const {state} = useContext(CartContext);
    console.log(state.selectedProducts);
    return (
        <div style={{display:"flex",flexWrap:"Wrap", justifyContent:"space-around"}}>
            {
                productsData.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;