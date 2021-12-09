const shorten = (title) =>{
    const splitTitle = title.split(" ");
    const newTitle = `${splitTitle[0]} ${splitTitle[1]}`
    return newTitle;
}
const quantityCounter = (selectedProduct,id) => {
        const index = selectedProduct.findIndex(item =>item.id === id);
        if (index === -1) {
            return false
        }
        return selectedProduct[index].quantity;
}
export {
    shorten,
    quantityCounter
}