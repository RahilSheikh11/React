

const RestaurantCard = (props) =>{
    // console.log(props);
    const {resData} = props;

    const {
        name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwo,
        cloudinaryImageId,
    }
    = resData;
    return (
        <div className="res-card">
            <img 
            className="res-logo" 
            alt="Corrupted image" 
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId }/>
       <h3> {name} </h3>
       <h4> {cuisines.join(", ")}</h4>
       <h4>{avgRating}</h4>
       <h4>{deliveryTime}</h4>
       <h4>{costForTwo / 100} for two</h4>
        </div>
    );
};

export default RestaurantCard;