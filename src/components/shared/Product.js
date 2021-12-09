import React from 'react';
import { Link } from 'react-router-dom';
//function
import { shorten } from '../../helper/functions';
const Product = (props) => {
    const {title,price,image} = props.productData;
    return (
        <div>
            <img src={image} alt="Product" width='200px' />
            <h3>{shorten(title)}</h3>
            <p>{price}</p>
            <Link to="/details">Details</Link>
        </div>
    );
};

export default Product;