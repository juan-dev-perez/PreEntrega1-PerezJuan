import './ItemCount.css';
import { useState } from 'react';

function ItemCount({stock,initial}) {

    const [cantidad, setCantidad] = useState(initial);
    const [mensaje,setMensaje] = useState('');

    function menos(){
        setMensaje('');
        if(cantidad <= 1){
            return;
        }
        setCantidad(cantidad - 1);
    }

    function mas(){
        setMensaje('');
        if(cantidad >= stock){
            setMensaje('Maximo alcanzado');
            return;
        }
        setCantidad(cantidad + 1);
    }

    return (
        <div className='count_contenedor'>
            <div className="item_count">
                <button onClick={menos}>-</button>
                <span>{cantidad}</span>
                <button onClick={mas}>+</button>
            </div>
            <p className='stock_count'>Stock: {stock}</p>
            <p className='stock_message'>{mensaje}</p>
            <button className='btn_count'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;