const addItem = (product) =>{
    return {
        type:"ADD_ITEM",
        payLoad:product,
    }
}
const removeItem = (product) =>{
    return {
        type:"REMOVE_ITEM",
        payLoad:product,
    }
}
const increase = (product) =>{
    return {
        type:"INCREASE",
        payLoad:product,
    }
}
const decrease = (product) =>{
    return {
        type:"DECREASE",
        payLoad:product,
    }
}
const checkOut = () =>{
    return {
        type:"CHECKOUT", 
    }
}
const clear = () =>{
    return {
        type:"CLEAR", 
    }
}

export {
    addItem,removeItem,increase,decrease,checkOut,clear
}