import { createContext, useEffect, useState } from "react";
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);
    const [contador,setContador] = useState(0);
    const [total, setTotal] = useState(0);
    const [sameEmail, setSameEmail] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [error, setError] = useState({
        div: 'error_email_none',
        email: ''
    });
    const [clientData, setClientData] = useState({
        nombre:'',
        apellido:'',
        telefono:'',
        email:'',
        email2:''
    });

    const navigate = useNavigate();

    useEffect( () => {
        redirectOrderSuccess();
    },[orderId]);

    const isInCart = (id) => {
        return cartList.find(item => item.id === id);
    }

    const addItem = (item) => {
        if(isInCart(item.id)){
            // logica para no duplicar un item en el cart
            // y solo incrementar la cantidad
            setCartList(cartList.map( i => {
                i.id === item.id && (i.cantidad += item.cantidad);
                return i;
            }));
        }else{
            // agregar un nuevo item al no existir aun en el cart
            setCartList(cartList => [...cartList, item]);
        }
    }

    const carCountIcon = (num) => {
        setContador(contador + num);
    }

    const getTotal = () => {
        let totalActualizado = 0;
        cartList.forEach((item) => {
            totalActualizado += (item.price * item.cantidad);
        });
        setTotal(totalActualizado);
    }

    const removeItem = (id) => {
        const newCartFilter = cartList.filter( item => !(item.id === id && item.cantidad === 1));
        const newCart = newCartFilter.map( item => { 
            item.id === id && (item.cantidad -= 1);
            return item;
        });
        setCartList(newCart);
        setContador(contador - 1);
    }

    const clearCart = () => {
        setCartList([]);
        setContador(0);
    }

    const validation = async (e) => {
        e.preventDefault();
        sameEmail === false ? 
            setError({...error, div:'error_email', email: 'email_input_error'}) :
            makeOrder();
    }

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
        <CartContext.Provider value={{
            addItem, 
            cartList, 
            contador, 
            carCountIcon, 
            getTotal, 
            total, 
            removeItem, 
            clearCart, 
            sameEmail,
            setSameEmail, 
            clientData,
            setClientData,
            validation,
            error,
            setError
            }}>
            {children}
        </CartContext.Provider>
    )
}