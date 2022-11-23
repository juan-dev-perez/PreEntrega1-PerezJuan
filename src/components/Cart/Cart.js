import './Cart.css';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import NoCartItems from './NoCartItems/NoCartItems';
import RenderCart from './RenderCart/RenderCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

const {cartList, total, clearCart} = useContext(CartContext);
const [clientData, setClientData] = useState({})
const [orderId, setOrderId] = useState('');
const navigate = useNavigate();

const getData = (datos) => {
    setClientData(datos);
}

useEffect( () => {
    redirectOrderSuccess();
},[orderId]);

const makeOrder = async () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const order = {
        buyer: clientData,
        items: cartList,
        total: total,
        date: serverTimestamp(),
        state: 'Generada'
    }
    await addDoc(ordersCollection, order).then( ({id}) => setOrderId(id));
}

const redirectOrderSuccess = () => {
    if(orderId !== ''){
        navigate(`/order-success/${orderId}`);
        clearCart();
    }
}

return (
    <div className='cart_container'>
        {
            cartList[0] ?
            <RenderCart getData={getData} makeOrder={makeOrder}/> 
            :
            <NoCartItems items={cartList} />
        }
        {/* {
            (Object.entries(clientData).length !== 0 && cartList[0]) && 
                <button onClick={() => makeOrder()}>Realizar Compra</button>
        } */}
    </div>
)
}

export default Cart;