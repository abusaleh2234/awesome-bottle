import { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css"

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])

    const handleAddToCart = (bottle) => {
        // console.log("click cart");
        // console.log(bottle);

        const newCart = [...cart, bottle]
        setCart(newCart)
        
        
    }
    const loadedBottles = use(bottlesPromise)
    // console.log(loadedBottles);

    return (
        <div>
            <h2>Awesome Bottle {loadedBottles.length}</h2>
            <h4>Perches Product : {cart.length}</h4>
            <div className="bottles-Container">
                {
                    loadedBottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;