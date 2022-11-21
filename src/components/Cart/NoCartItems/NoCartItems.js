import './NoCartItems.css';
import { Link } from 'react-router-dom';

const NoCartItems = ({items}) => {
    
    return !items[0] && 
        <div className='no_items'>
            <h2>No hay articulos en el carrito</h2>
            <Link to='/' className='link_to_home'>Ir al Inicio</Link>
        </div>
    
}

export default NoCartItems;