import RestaurantCard,{withPromoted}from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"; 
import useOnlineStatus from "./../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Body = () =>
{
    const [list, setlist] = useState([]);
    const [searchBar, setSearchBar] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const cartItems = useSelector((store) => store.cart.items);
    const Promoted = withPromoted(RestaurantCard);
    useEffect(() => {fetchData(); }, []);
    const onlineStatus = useOnlineStatus();
    const fetchData = async () =>{
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.32540414916516&lng=73.19742668420076&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
       
  
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
            <div className="search p-4 m-4 border-b-black shadow-lime-50">
                <input type="text" className="search-bar border-2" value={searchBar}  onChange = {(e) => setSearchBar(e.target.value)}/>
                <button className="px-4 py-1.5 bg-orange-200 m-4 rounded-2xl" 
                onClick={() =>{
                    const filteredList = list?.filter((res) => res.info.name.toLowerCase().includes(searchBar.toLowerCase()));
                    setFilteredList(filteredList);
                }}>Search</button>
             
                <button className="px-4 py-2 bg-gray-200 m-4 rounded-xl"
                onClick ={()=>{
                    const toprated = list?.filter((res)=> res.info.avgRating > 4.0 );
                    setFilteredList(toprated);
                    console.log(toprated);
                }}
                
                >
                Top Rated Restaurants
                </button>
            </div>
</div>
            <div className="flex flex-wrap">               
        {filteredList.map((restaurant) =>( 
            <Link 
            key = {restaurant.info?.id}
            to={"/restaurant/" + restaurant.info.id }>
                { restaurant?.info?.promoted ?( 
                    <Promoted  resData={restaurant}/> 
                ):(
            <RestaurantCard  resData={restaurant} />
                )}
            </Link>))}
             
        
  
   </div>
        </div>  );
};

export default Body;