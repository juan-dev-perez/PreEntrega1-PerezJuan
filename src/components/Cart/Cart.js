import './Cart.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import NoCartItems from './NoCartItems/NoCartItems';
import RenderCart from './RenderCart/RenderCart';

const Cart = () => {

const {cartList} = useContext(CartContext);

return (
    <div className='cart_container'>
        {
            cartList[0] ?
            <RenderCart/> 
            :
            <NoCartItems items={cartList} />
        }
    </div>
)
}

export default Cart;