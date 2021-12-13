import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//icons
import Cart from "../../asset/icons/cart.svg"
//contet 
import { CartContext } from '../../context/CartContextProvider';

//css
import styles from './styles/navbar.module.css';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div className={styles.container}>
            <Link to="/products">Products</Link>
            
            <section className={styles.containerCart}>
                <Link to="/cart">
                <img src={Cart} alt="shopCart"/>
                {
                    state.productsCounter>=1 && <span>{state.productsCounter}</span>
                }
                </Link>
            </section>
            
        </div>
    );
};

export default Navbar;