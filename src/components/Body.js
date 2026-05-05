 {/* <RestaurantCard /> */}
                {/* <RestaurantCard 
                resName="KFC"
                resCuisine= " Fried Chicken, Burgers, Nuggets, Beverages"
                resRating="0.0"
                resDeliveryTime = "38 minutes"
                /> */}
                {/* <RestaurantCard
                resData={resList[0]}
                />
                <RestaurantCard
                resData={resList[1]}
                />
                <RestaurantCard
                resData={resList[2]}
                />
                <RestaurantCard
                resData={resList[3]}
                />
            */}

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata.js";
import { useState } from "react";

const Body = () =>
{
    const [list, setlist] = useState(resList);
    return (
        <div className="body">
            <div className="Filter">
                <button className="filter-btn"
                onMouseOver={()=>{
                    const toprated = list.filter((res)=> res.data.avgRating > 4);
                    setlist(toprated);
                }}
                
                >
                Most Rated Restaurants
                </button>
            </div>

            <div className="res-container">
               
        {list.map((restaurant) =>( <RestaurantCard key = {restaurant.data.id} resData={restaurant} />))}
  
   </div>
        </div>  );
};

export default Body;