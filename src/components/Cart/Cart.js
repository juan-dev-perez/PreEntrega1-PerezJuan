import './Cart.css';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import NoCartItems from './NoCartItems/NoCartItems';
import RenderCart from './RenderCart/RenderCart';

const Cart = () => {

const {cartList, total} = useContext(CartContext);
const [clientData, setClientData] = useState({})
const [orderId, setOrderId] = useState('');

const getData = (datos) => {
    setClientData(datos);
}

const makeOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const order = {
        buyer: clientData,
        items: cartList,
        total: total,
        date: serverTimestamp(),
        state: 'Generada'
    }
    addDoc(ordersCollection, order).then( ({id}) => setOrderId(id));
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