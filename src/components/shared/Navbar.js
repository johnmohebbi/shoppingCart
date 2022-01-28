import React from 'react';
import { Link } from 'react-router-dom';

//icons
import Cart from "../../asset/icons/cart.svg"
//redux
import { useSelector } from 'react-redux';

//css
import styles from './styles/navbar.module.css';

const Navbar = () => {
    const state = useSelector(state => state.cartState)
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