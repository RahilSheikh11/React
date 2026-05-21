 import { useEffect, useState } from "react";

const RestaurantMenu = () =>
{
    useEffect(() =>{fetchData();},[]);

    const fetchData = async () =>{
        const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.32540414916516&lng=73.19742668420076&restaurantId=1040825&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
    };
    return (
        <div className= "menu"> Restaurant Name 
        <div className="menu-items">
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Sandwich</li>
                <li>Nihari</li>
                <li>Biryani</li>
            </ul>
             </div>
</div>
    );
};

export default RestaurantMenu;