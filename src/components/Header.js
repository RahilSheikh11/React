import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {

    const cartItems = useSelector((store) => store.cart.items);
      const [loginbtn, setLoginbtn] = useState("Login");  
      const onlineStatus = useOnlineStatus();
     const {LoggedInUser}= useContext(UserContext);
                console.log(LoggedInUser);
    return (
    <div className="flex justify-between bg-orange-400 shadow-lg mb-2">
        <div className="logo-container"> 
           
                 <img 
                    className="w-56" 
                        src="https://static.vecteezy.com/system/resources/previews/021/953/308/original/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg" />
                    </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status : {onlineStatus ? "✅" : "❌"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/contact">Contact us</Link></li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to = "/cart"> Cart-({cartItems.length} items)</Link></li>
                <li className="px-4"> {LoggedInUser}</li>
                 {/* <li>Cart</li> */}
                 <button className="login" onClick={() => {
                    loginbtn === "Login" ?
                    setLoginbtn("Logout") : setLoginbtn("Login");
                 }}>{loginbtn}</button>
            </ul>
        </div>

        </div>
    )
};

export default Header;