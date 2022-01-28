import React from 'react';
import { Link } from 'react-router-dom';
//functions
import {shorten} from "../../helper/functions";
//redux 
import { useSelector,useDispatch } from 'react-redux';
//icons
import trash from '../../asset/icons/trash.svg';
//css
import styles from './styles/cart.module.css'
const Cart = () => {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();


    return (
        <div className={styles.cartContainer}>
            <section className={styles.sectionProducts}>
        {
           state.selectedProducts &&  state.selectedProducts.map(selectProduct => {
               return (
                <div className={styles.selectedProduct} key={selectProduct.id}>
                    <img className={styles.productImage} src={selectProduct.image} alt="product"/>
                    <h2 className={styles.cartTitle}>{shorten(selectProduct.title)}</h2>
                    <p className={styles.cartPrice}>{selectProduct.price}$</p>
                    <p className={styles.cartQuantity}>{selectProduct.quantity}</p>
                    <div className={styles.cartBtns}>
                    <button className={styles.cartIncrease} onClick={()=> dispatch({type:"INCREASE",payLoad:selectProduct})}>+</button>
                    {selectProduct.quantity === 1 && <button className={styles.cartRemove} onClick={()=> dispatch({type:"REMOVE_ITEM",payLoad:selectProduct})}><img src={trash} alt="trash" /></button>}
                    {selectProduct.quantity > 1 && <button className={styles.cartDecrease} onClick={()=> dispatch({type:"DECREASE",payLoad:selectProduct})}>-</button>}
                    </div>
                </div>
                
               )
             
            })
        }
        </section>
           <section className={styles.totalContainer}>
            {
                state.productsCounter > 0 &&   
                <div className={styles.counterCountainer}>
                    <div className={styles.sectionItemsAndPayments}>
                    <p className={styles.items}>total items: <span>{state.productsCounter}</span></p>
                    <p className={styles.payments}>total payments: <span>{state.total}</span></p>
                    </div>
                    <div className={styles.sectionBtnsInTotalCounter}>
                        <button className={styles.ClearBtn} onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                        <button className={styles.CheckoutBtn} onClick={()=>dispatch({type:"CHECKOUT"})}>Checkout</button>
                    </div>
                </div>
            }
            {
                state.checkout && 
                <div>
                    <h3 className={styles.titleMessege}>checkOut successfully</h3>
                    <Link className={styles.goStore} to="/products">got to Store</Link>
                </div>
                }
                {
                !state.checkout && state.productsCounter === 0 &&
                <div>
                    <h3 className={styles.titleMessege}>your cart is empty.</h3>
                    <Link className={styles.goStore} to="/products">go to Store</Link>
                </div>
                }
           </section>
        </div>
    );
};

export default Cart;