const getItemFromLocalStorage = () => {
    const storedCardString = localStorage.getItem("cart")

    if(storedCardString){
        const storedCart =JSON.parse(storedCardString)
        return storedCart
    }
    return []
}

const saveCartToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem("cart", cartStringified)
}

const addItemToLocalStorage = (id) => {
    const card = getItemFromLocalStorage()
    // console.log(card);
    // console.log(id);
    
    const newCart = [...card, id]
    // card.push(id)
    // console.log(card);
    
    // saveCartToLocalStorage(card)
    saveCartToLocalStorage(newCart)
}
export {getItemFromLocalStorage, addItemToLocalStorage}