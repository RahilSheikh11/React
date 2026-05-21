import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

      const [loginbtn, setLoginbtn] = useState("Login");  
    
    return (
    <div className="header">
        <div className="logo-container"> 
                 <img 
                    className="logo" 
                        src="https://static.vecteezy.com/system/resources/previews/021/953/308/original/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg" />
                    </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><img className="cart" src="https://img.freepik.com/premium-vector/fast-food-cart-logo-template_692461-78.jpg?w=1060" /></li>
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