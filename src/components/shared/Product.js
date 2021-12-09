import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//function
import { shorten } from '../../helper/functions';
//context
import { CartContext } from '../../context/CartContextProvider';
const Product = (props) => {
    const {title,price,image} = props.productData;
    const {state,dispatch} = useContext(CartContext);
    console.log(state);
    return (
        <div>
            <img src={image} alt="Product" width='200px' />
            <h3>{shorten(title)}</h3>
            <p>{price}</p>
            <Link to="/details">Details</Link>
            <button onClick={()=> dispatch({type:"ADD_ITEM",payLoad:props.productData})}>add to cart</button>
        </div>
    );
};

export default Product;