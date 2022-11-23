import './OrderSucess.css';
import { Link, useParams } from "react-router-dom";

const OrderSuccess = () => {

    const { orderId } = useParams();

    return (
        <div className="order_success_container">
            <div className='order_success'>
                <h3>Orden confirmada</h3>
                <h2>
                    <span>Id de Seguimiento: </span>
                    {orderId}
                </h2>
                <h1>Muchas gracias por su compra</h1>
                <Link to='/' className='btn_to_cart'>Volver al inicio</Link>
            </div>
        </div>
    )
}

export default OrderSuccess;