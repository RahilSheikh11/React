import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"; 

const Body = () =>
{
    const [list, setlist] = useState([]);
    const [searchBar, setSearchBar] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {fetchData(); }, []);

    const fetchData = async () =>{
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.32540414916516&lng=73.19742668420076&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
       
  
    setlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
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
                    const filteredList = list?.filter((res) => res.info.name.toLowerCase().includes(searchBar.toLowerCase()));
                    setFilteredList(filteredList);
                }}>Search</button>

                <button className="filter-btn"
                onClick ={()=>{
                    const toprated = list?.filter((res)=> res.info.avgRating > 4.0 );
                    setFilteredList(toprated);
                    console.log(toprated);
                }}
                
                >
                Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">               
        {filteredList.map((restaurant) =>( 
            <Link 
            key = {restaurant.info?.id}
            to={"/restaurant/" + restaurant.info.id }>
            <RestaurantCard  resData={restaurant} />
            </Link>))}
  
   </div>
        </div>  );
};

export default Body;