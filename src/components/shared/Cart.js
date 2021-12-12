import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
//functions
import {shorten} from "../../helper/functions"
import { CartContext } from '../../context/CartContextProvider';
//icons
import trash from '../../asset/icons/trash.svg'
const Cart = () => {
    const {state,dispatch} = useContext(CartContext);

    return (
        <div>

        {
           state.selectedProducts &&  state.selectedProducts.map(selectProduct => {
               return (
                <div>
                    <img src={selectProduct.image} alt="" width='85px'/>
                    <h2>{shorten(selectProduct.title)}</h2>
                    <p>{selectProduct.price}</p>
                    <p>{selectProduct.quantity}</p>
                    <div>
                    <button onClick={()=> dispatch({type:"INCREASE",payLoad:selectProduct})}>+</button>
                    {selectProduct.quantity === 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM",payLoad:selectProduct})}><img src={trash} alt="trash" /></button>}
                    {selectProduct.quantity > 1 && <button onClick={()=> dispatch({type:"DECREASE",payLoad:selectProduct})}>-</button>}

                    </div>
                </div>
                
               )
             
            })
        }
           {
            state.productsCounter > 0 &&   
            <div>
               <p><span>total items:</span>{state.productsCounter}</p>
               <p><span>total payments:</span> {state.total}</p>
               <div>
                   <button onClick={()=>dispatch({type:"CHECKOUT"})}>Checkout</button>
                   <button onClick={()=>dispatch({type:"CLEAR"})}>clear</button>
               </div>
            </div>
           }
           {
            state.checkout && 
            <div>
                <h3>check out successfully</h3>
                <Link to="/products">got to Store</Link>
            </div>
            }
            {
            !state.checkout && state.productsCounter === 0 &&
            <div>
                <h3>your cart is empty.</h3>
                <Link to="/products">got to Store</Link>
            </div>
            }
        </div>
    );
};

export default Cart;