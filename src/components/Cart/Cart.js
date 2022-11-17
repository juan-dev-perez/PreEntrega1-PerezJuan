import './Cart.css';
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem/CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {

const {cartList, getTotal, total} = useContext(CartContext);

useEffect( () => {
    getTotal();
},[cartList])

return (
    <div className='cart_container'>
        <h1>Mi Carrito</h1>
        {
            !cartList[0] && 
                <div className='no_items'>
                    <h2>No hay articulos en el carrito</h2>
                    <Link to='/' className='link_to_home'>Ir al Inicio</Link>
                </div>
        }

        {
            cartList[0] &&
            cartList.map((item, i) => (
                <CartItem key={i} item={item}/>
            ))
            
        }
        {
            cartList[0] &&
            <div>
                <h3>Total</h3>
                <h2>{total}</h2>
            </div>
        }
        
    </div>
)
}

export default Cart;