import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//function
import { shorten,quantityCounter } from '../../helper/functions';
//context
import { CartContext } from '../../context/CartContextProvider';
const Product = ({productData}) => {
    const {title,price,image,id} =productData;
    const {state,dispatch} = useContext(CartContext);

    return (
        <div>
            <img src={image} alt="Product" width='200px' />
            <h3>{shorten(title)}</h3>
            <p>{price}</p>
            <Link to={`/products/${id}`}>Details</Link>
            {
                quantityCounter(state.selectedProducts,id) >= 1 ?
            <button onClick={()=> dispatch({type:"INCREASE",payLoad:productData})}>+</button>:
            <button onClick={()=> dispatch({type:"ADD_ITEM",payLoad:productData})}>add to cart</button>
            }
            
                <div>
                {quantityCounter(state.selectedProducts,id) === 1 &&
                <button onClick={()=> dispatch({type:"REMOVE_ITEM",payLoad:productData})}>remove</button>
                
                }
                {quantityCounter(state.selectedProducts,id) > 1 &&
                    <button onClick={()=> dispatch({type:"DECREASE",payLoad:productData})}>-</button>
                }
                </div>

            

        </div>
    );
};

export default Product;