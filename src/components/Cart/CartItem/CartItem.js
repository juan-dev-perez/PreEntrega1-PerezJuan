import './CartItem.css';
import { CartContext } from "../../../context/CartContext";
import { useContext } from 'react';

const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <div className='item_cart'>
            <div><img src={item.pictureUrl} className='img_cart' alt={`Imagen del producto ${item.title}`} /></div>
            <div className='item_cart_title'>{item.title}</div>
            <div className='item_cart_cantidad'>{item.cantidad}</div>
            <div className='item_cart_price'>{item.price}</div>
            <div>{ item.price * item.cantidad }</div>
            <div> 
                <button onClick={() => removeItem(item.id)}>eliminar</button>
            </div>
        </div>
    )
}

export default CartItem;