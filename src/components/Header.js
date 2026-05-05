const Header = () => {
    return (
    <div className="header">
        <div className="logo-container"> 
                 <img 
                    className="logo" 
                        src="https://static.vecteezy.com/system/resources/previews/021/953/308/original/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg" />
                    </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>About</li>
                <li><img className="cart" src="https://img.freepik.com/premium-vector/fast-food-cart-logo-template_692461-78.jpg?w=1060" /></li>
                 {/* <li>Cart</li> */}
            </ul>
        </div>

        </div>
    )
};

export default Header;