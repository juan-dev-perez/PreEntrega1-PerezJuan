import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../../context/CartContext";
import './CartWidget.css';

const CartWidget = () => {
    const {contador} = useContext(CartContext);

    return (
        <div className="cart-widget">
            <Link to='/cart'>
                <img src="/icon-cart.png" alt="icono del carrito"/>
            </Link>
            {
                contador > 0 && <div className='counter_cart'>{contador}</div>
            }
        </div>
    )
};

export default CartWidget;