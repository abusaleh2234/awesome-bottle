import "./bottle.css"
const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle);
    const {img, price, stock, name } = bottle
    
    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Stock: {stock} Unit</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;