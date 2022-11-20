import './Cart.css';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem/CartItem";
import { Link } from 'react-router-dom';
import ClientForm from './CartItem/ClientForm/ClientForm';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

const Cart = () => {

const {cartList, getTotal, total, clearCart} = useContext(CartContext);
const [clientData, setClientData] = useState({})
const [orderId, setOrderId] = useState('');

useEffect( () => {
    getTotal();
},[cartList])

const getDatos = (datos) => {
    setClientData(datos);
}

const makeOrder = (cartItems, client, total) => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const order = {
        buyer: client,
        items: cartItems,
        total: total,
        date: serverTimestamp(),
        state: 'Generada'
    }
    addDoc(ordersCollection, order).then( ({id}) => setOrderId(id));
}

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

        <button onClick={clearCart}>Vaciar carrito</button>

        <ClientForm datos={getDatos}/>

        {Object.entries(clientData).length !== 0 && 
            <button onClick={() => makeOrder(cartList, clientData, total)}>Realizar Compra</button>}
        
    </div>
)
}

export default Cart;