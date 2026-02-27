import "./cart.css"
const Cart = ({cart, handleRemoveBottleFromCart }) => {
    console.log(cart);
    
    return (
        <div className="cart-container">
            {
                cart.map(bottle => <div key={bottle.id} className="cart-img">
                    <img src={bottle.img} alt="" />
                    <div className="">
                        <button onClick={() => handleRemoveBottleFromCart (bottle.id)}>x</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;