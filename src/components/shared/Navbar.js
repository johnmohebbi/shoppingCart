import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//icons
import Cart from "../../asset/icons/cart.svg"
//contet 
import { CartContext } from '../../context/CartContextProvider';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div>
            <Link to="/products">Products</Link>
           
           <Link to="/cart">
           <img src={Cart} alt="shopCart" width='25px'/>
           </Link>
           <span>{state.productsCounter}</span>
           
        </div>
    );
};

export default Navbar;