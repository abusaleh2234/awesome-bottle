import React from 'react';
import "./buy.css"
const BuyProducts = ({buyProducts}) => {

    return (
        <div className='buyProducts'>
            {
                buyProducts.map(buyProduct => <div key={buyProduct.id} className='buy'>
                    <img  src={buyProduct.images[0]} alt="" />
                </div>)
            }
        </div>
    );
};

export default BuyProducts;