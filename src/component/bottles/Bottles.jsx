import { use } from "react";
import Bottle from "../bottle/Bottle";

const Bottles = ({bottlesPromise}) => {
    const loadedBottles = use(bottlesPromise)
    console.log(loadedBottles);
    
    return (
        <div>
            <h2>Awesome Bottle {loadedBottles.length}</h2>
            {
                loadedBottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;