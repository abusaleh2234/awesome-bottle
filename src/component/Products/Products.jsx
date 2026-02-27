import React, { use, useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./products.css"
import BuyProducts from '../BuyProducts/BuyProducts';
import { addBuyProduct, getBuyProduct } from '../../utlities/buylocalStorage';
const Products = ({productsPromise}) => {
    const loadProducts = use(productsPromise)
    const products = loadProducts.products    

    const [buyProducts, setBuyProducts] = useState([])

    const handleBuyProducts = (product) => {
        console.log(product);
        const newBuyProducts = [...buyProducts, product]
        setBuyProducts(newBuyProducts)

        addBuyProduct(product.id)
    }
    useEffect(() => {
        const buyProductsId = getBuyProduct()
        // console.log(buyProducts);
        const storedProducts = []
        for (const productId of buyProductsId) {
            // console.log(productId);
            const buyProductsInLocal = products.find(product => product.id === productId)
            storedProducts.push(buyProductsInLocal)
        }
        // console.log(storedProducts);
        setBuyProducts(storedProducts)
    },[products])
    return (
        <div>
            <h2>Vibe Products</h2>
            <div className="">
                {
                    <BuyProducts buyProducts={buyProducts}></BuyProducts>
                }
            </div>
            <div className="products-Container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        handleBuyProducts={handleBuyProducts}
                        product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;