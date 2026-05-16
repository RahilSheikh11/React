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
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>
{
    const [list, setlist] = useState([]);
    const [searchBar, setSearchBar] = useState("");

    useEffect(() => {fetchData(); }, []);

    const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.324692&lng=73.1891052&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json = await data.json();
        console.log(json);
  

      
    setlist(json?.data?.cards[3]?.card?.card?.info);


    };


    //  This condition is known as conditional rendering.


    //  if(list.length === 0){
    //     return <Shimmer />
    //  } 


// This condition is also known as conditional rendering.

    return list.length === 0 ? <Shimmer /> :(
        <div className="body">
            <div className="Filter">
                <input type="text" className="search-bar" value={searchBar}  onChange = {(e) => setSearchBar(e.target.value)}/>
                <button className="search-bar-btn" 
                onClick={() =>{
                    const filteredList = list?.filter((res) => res.card.card.info.name.toLowerCase().includes(searchBar.toLowerCase()));
                    setlist(filteredList);
                }}>Search</button>

                <button className="filter-btn"
                onMouseOver ={()=>{
                    const toprated = list?.filter((res)=> res.card.card.info.avgRating > 4);
                    setlist(toprated);
                }}
                
                >
                Most Rated Restaurants
                </button>
            </div>

            <div className="res-container">
               
        {list.map((restaurant) =>( <RestaurantCard key = {restaurant.card.card.info.id} resData={restaurant} />))}
  
   </div>
        </div>  );
};

export default Body;