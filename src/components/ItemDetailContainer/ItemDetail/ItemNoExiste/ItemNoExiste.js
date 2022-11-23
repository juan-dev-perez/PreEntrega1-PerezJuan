import './ItemNoExiste.css';
import { Link, useParams } from "react-router-dom";

const ItemNoExiste = () => {

    const {id} = useParams();

    return (
        <div className='no_existe_container'>
            <div className='item_no_exist'>
                <div>El producto con el id <span>{id}</span> no existe</div>
                <Link className='link_to_home' to='/'>Volver al inicio</Link>
            </div>
        </div>
    )
}

export default ItemNoExiste;