import React, { useReducer } from 'react';

const initialState = {
    selectedProducts:[],
    productsCounter :0,
    total :0,
    checkout:false
}
const sumInCart = (selectedProducts) =>{
    const productsCounter = selectedProducts.reduce((total,product)=>total + product.quantity,0);
    const total = selectedProducts.reduce((total,product)=>total + (product.quantity * product.price),0);
    return {productsCounter,total};
}
const reducer = (state,action) =>{
    switch(action.type) {
        case 'ADD_ITEM':
            if (!state.selectedProducts.find(product=>product.id === action.payLoad.id)) {
                state.selectedProducts.push({
                    ...action.payLoad,
                    quantity:1,
                   
                })
                
            }
            return {
                ...state,
                selectedProducts:[...state.selectedProducts],
                ...sumInCart(state.selectedProducts),
                checkout:false,
            }
        case 'REMOVE_ITEM':
            const newSelectedProducts = state.selectedProducts.filter(item => item.id !== action.payLoad.id);
            return {
                ...state,
                selectedProducts:[...newSelectedProducts],
                ...sumInCart(newSelectedProducts),

            }
        case 'INCREASE':
            const indexI = state.selectedProducts.findIndex(item => item.id === action.payLoad.id);
            state.selectedProducts[indexI].quantity++;
            return {
                ...state,
                ...sumInCart(state.selectedProducts),
            }
        case 'DECREASE':
            const indexD = state.selectedProducts.findIndex(item => item.id === action.payLoad.id);
            state.selectedProducts[indexD].quantity--;
            return {
                ...state,
                ...sumInCart(state.selectedProducts),
            }
        case 'CHECKOUT':
           return {
                selectedProducts:[],
                productsCounter :0,
                total :0,
                checkout:true
            }
        case 'CLEAR':
            return {
                selectedProducts:[],
                productsCounter :0,
                total :0,
                checkout:false
            }
        default:
        return state
    }
}
export const CartContext = React.createContext();
const CartContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;