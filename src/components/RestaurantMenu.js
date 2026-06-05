 import { useEffect, useState } from "react";
 import shimmer from "./Shimmer";
 import {useParams} from "react-router-dom";

const RestaurantMenu = () =>
{
    const {resId} = useParams();
    useEffect(() =>{fetchData();},[]);
    const [resInfo, setResInfo] = useState();

    const fetchData = async () =>{
        const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.32540414916516&lng=73.19742668420076&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
        
        if (resInfo === 0) return <Shimmer/>;

        const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

        const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    };
    return (
        <div className= "menu"> Restaurant Name 
        <div className="menu-items">
            
                <p>{name}</p>
               <p> {cuisines.join(", ")} - {costForTwoMessage}</p>
          <h2>Menu</h2>
          <ul>  
            {itemCards.map((item) => (
                <li key = {item.card.info.id}>{item.card.info.name / 100} - {" RS-"} {item.card.info.price /100 || item.card.info.defaultPrice / 100}</li>
            ))}
          </ul>
             </div>
</div>
    );
};

export default RestaurantMenu;