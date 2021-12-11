import React,{ useContext } from 'react';
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
           state.selectedProducts&&  state.selectedProducts.map(selectProduct => {
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
        </div>
    );
};

export default Cart;