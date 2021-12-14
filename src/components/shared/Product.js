import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//function
import { shorten,quantityCounter } from '../../helper/functions';
//context
import { CartContext } from '../../context/CartContextProvider';
//icons 
import Trash from "../../asset/icons/trash.svg"
//css
import styles from "./styles/product.module.css";

const Product = ({productData}) => {
    const {title,price,image,id} =productData;
    const {state,dispatch} = useContext(CartContext);

    return (
        <div className={styles.containerproduct}>
            <img className={styles.imageProduct} src={image} alt="Product" />
            <section className={styles.bodyProducts}>
                <h3 className={styles.titleProduct}>{shorten(title)}</h3>
                <p className={styles.priceProduct}>{price} $</p>
            </section>
            <div className={styles.containerBtns}>
                <Link className={styles.detaisLink} to={`/products/${id}`}>Details</Link>
                <div className={styles.btns}>
                {
                    quantityCounter(state.selectedProducts,id) === 1 &&
                    <button className={styles.trashBtn} onClick={()=> dispatch({type:"REMOVE_ITEM",payLoad:productData})}>
                        <img src={Trash} alt="Trash" />
                        </button>
                }
                
                {quantityCounter(state.selectedProducts,id) > 1 &&
                    <button className={styles.decreaseBtn} onClick={()=> dispatch({type:"DECREASE",payLoad:productData})}>-</button>
                }
                {quantityCounter(state.selectedProducts,id) && <span className={styles.ProductCounter}>{quantityCounter(state.selectedProducts,id)}</span>}
                {
                quantityCounter(state.selectedProducts,id) >= 1 ?
                <button className={styles.increaseBtn} onClick={()=> dispatch({type:"INCREASE",payLoad:productData})}>+</button>:
                <button className={styles.addBtns} onClick={()=> dispatch({type:"ADD_ITEM",payLoad:productData})}>add to cart</button>
                }
                </div>
            </div>

            

        </div>
    );
};

export default Product;