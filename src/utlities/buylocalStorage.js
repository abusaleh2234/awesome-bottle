const getBuyProduct = () => {
    const buyStringfied = localStorage.getItem("buys")
    if (buyStringfied) {
        const buys = JSON.parse(buyStringfied)
        return buys
    }
    return []
}
const saveBuyToLocalStorage = (buyProductsId) => {
    const buyProductsStringed = JSON.stringify(buyProductsId)
    localStorage.setItem("buys", buyProductsStringed)
}
const addBuyProduct = (id) => {
    const buyProductsId = getBuyProduct()
    console.log(id);
    
    const newBuyProducts = [...buyProductsId, id]
    saveBuyToLocalStorage(newBuyProducts)
}

export {getBuyProduct, addBuyProduct}