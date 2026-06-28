import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
const dispatch = useDispatch();
const handleClearCart = () => {
    dispatch(clearCart());
}
const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className = "text-center m-4 p-4 ">
            <div className="text-2xl font-bold">Cart</div>

        <button className=" p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
            Clear Cart
        </button>

        {cartItems === 0 && (<h1> Cart is empty Please Add!</h1>)}
        
        </div>
    );
};

export default Cart;