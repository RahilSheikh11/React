import {useEffect, useState} from "react";

const useRestaurantMenu =(resId) =>{
    const [resInfo, setResInfo] = useState(null); 
    useEffect =(()=> {fetchData();},[]);

    const fetchData = () => {
        const data = fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.32540414916516&lng=73.19742668420076&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;