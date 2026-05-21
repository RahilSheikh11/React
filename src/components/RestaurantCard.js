

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
        sla,
    }
    = resData?.info;
    return (
        <div className="res-card">
            <img 
            className="res-logo" 
            alt="Corrupted image" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
       <h3> {name} </h3>
       <h4> {cuisines.join(", ")}</h4>
       <h4>{avgRating}</h4>
       <h4>{deliveryTime}</h4>
       <h4>{costForTwo}</h4>
       <h4>{sla?.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;