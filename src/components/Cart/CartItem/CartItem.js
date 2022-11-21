import './CartItem.css';
import { CartContext } from "../../../context/CartContext";
import { useContext } from 'react';

const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <tr>
            <td><img src={item.pictureUrl} className='img_cart' alt={`Imagen del producto ${item.title}`} /></td>
            <td>{item.title}</td>
            <td>
                <span>{item.cantidad}</span>
                <button className='btn_trash' onClick={() => removeItem(item.id)}></button>
            </td>
            <td>{item.price.toLocaleString("es")}</td>
            <td>{(item.price * item.cantidad).toLocaleString("es") }</td>
        </tr>
    )
}

export default CartItem;