import './RenderCart.css';
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import ClientForm from "../CartItem/ClientForm/ClientForm";

const RenderCart = ({getData, makeOrder}) => {

const {cartList, getTotal, total, clearCart} = useContext(CartContext);

    useEffect( () => {
        getTotal();
    },[cartList])

    const getDatos = (datos) => {
        getData(datos);
    }

    const numToMoney = (num) => {
        return num.toLocaleString("es",{ style: 'currency', currency: 'ARS'})
    }

    return (
        <div>
            <h1>Mi Carrito</h1>
            <div className='render_container'>
                <div className='items_cart_container'>
                    <table className='table_cart'>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio Por Unidad</th>
                                <th>Cantidad</th>
                                <th>Precio Parcial</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            cartList.map((item, i) => (
                                <CartItem key={i} item={item}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="form_container">
                    <ClientForm datos={getDatos}/>
                    <div>
                        <h2>Total</h2>
                        <h2>{numToMoney(total)}</h2>
                    </div>
                    <div className='form_btn_container'>
                        <button className='form_btn_vaciar' onClick={clearCart}>Vaciar carrito</button>
                        <button className='form_btn_comprar' onClick={makeOrder}>Realizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderCart;