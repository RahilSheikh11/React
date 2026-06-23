import { useContext } from "react";
import UserContext from "../utils/UserContext";


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
        <div className="m-4 p-4 w-[250px] bg-gray-100 shadow-lg">
            <img 
            className="rounded-lg" 
            alt="Corrupted image" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
       <h3 className="font-bold text-lg py-4"> {name} </h3>
       <h4>- {cuisines.join(", ")}</h4>
       <h4>- {avgRating}</h4>
       <h4>- {deliveryTime}</h4>
       <h4>- {costForTwo}</h4>
       <h4>- {sla?.slaString}</h4>
        </div>
);
};

export const withPromoted = (RestaurantCard) => {
    return (props) =>{
        return (
            <div>
                <label> Promoted </label>
            <RestaurantCard {...props} />
            </div>
        );
    };
};
export default RestaurantCard;