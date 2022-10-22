import './ItemCount.css';
import { useState } from 'react';

function ItemCount({stock,initial}) {

    const [cantidad, setCantidad] = useState(initial);
    const [mensaje,setMensaje] = useState('');

    function menos(){
        setMensaje('');
        if(cantidad <= 0){
            return;
        }
        setCantidad(cantidad - 1);
    }

    function mas(){
        setMensaje('');
        if(cantidad >= stock){
            setMensaje('Cantidad disponible alcanzada, no hay mas stock');
            return;
        }
        setCantidad(cantidad + 1);
    }

    return (
        <>
        <div className="contenedor">
            <button onClick={menos}>-</button>
            <span>{cantidad}</span>
            <button onClick={mas}>+</button>
        </div>
        <div>
            <p>Stock disponible: {stock}</p>
            <p>{mensaje}</p>
        </div>
        </>
    )
}

export default ItemCount;