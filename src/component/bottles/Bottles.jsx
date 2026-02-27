import { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css"
import { addItemToLocalStorage, getItemFromLocalStorage, removeItemFromLocalStorage } from "../../utlities/localstorage";
import Cart from "../cart/Cart";

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])

    
    const handleAddToCart = (bottle) => {
        // console.log("click cart");
        // console.log(bottle);
        const newCart = [...cart, bottle]
        setCart(newCart)
        
        addItemToLocalStorage(bottle.id)
    }
    const loadedBottles = use(bottlesPromise)
    // console.log(loadedBottles);
    useEffect(() => {
        const storedCartsId = getItemFromLocalStorage()
        // console.log(storedCartsId);
        const storedCart = []
        for (const id of storedCartsId) {
            // console.log(id);
            const cartBottle = loadedBottles.find(bottle => bottle.id === id)
            // console.log(cartBottle);
            if(cartBottle){
                storedCart.push(cartBottle)
            }
            
        }
        // console.log(storedCart);
        setCart(storedCart)
    },[loadedBottles])
    const handleRemoveBottleFromCart = (id) => {
        console.log("remove",id);
        const remainingCart= cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeItemFromLocalStorage(id)
    }
    return (
        <div>
            <h2>Awesome Bottle {loadedBottles.length}</h2>
            <h4>Perches Product : {cart.length}</h4>
            <div className="">
            <Cart handleRemoveBottleFromCart={handleRemoveBottleFromCart } cart={cart}></Cart>
            </div>
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