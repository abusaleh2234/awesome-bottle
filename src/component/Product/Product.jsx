import React from 'react';

const Product = ({product,handleBuyProducts}) => {
    // console.log(product);
    const {images, title, price} = product
    return (
        <div className='card'>
            <img src={images[0]} alt="" />
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleBuyProducts(product)}>Buy</button>
        </div>
    );
};

export default Product;