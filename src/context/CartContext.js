import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);
    const [contador,setContador] = useState(0);
    const [total, setTotal] = useState(0);

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
        // let count = 0;
        // const nuevaCantidad = cartList.map( item => {
        //     count += item.cantidad;
        //     return count
        // });
        // setContador(nuevaCantidad);
        // console.log(contador);
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
    }

    // const clear = () => {

    // }

    // console.log(cartList);

    return (
        <CartContext.Provider value={{addItem, cartList, contador, carCountIcon, getTotal, total, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}