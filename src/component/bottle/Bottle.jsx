
const Bottle = ({bottle}) => {
    // console.log(bottle);
    const {img} = bottle
    
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;