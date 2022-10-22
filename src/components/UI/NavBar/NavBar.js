import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => (
    <div className="nav-container">
        <p><Link to='/'>tech-shop</Link></p>
        <div className='nav-bar'>
            <ul className="nav-bar">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/category/mouses">Mouses</Link> </li>
                <li> <Link to="/category/teclados">Teclados</Link> </li>
                <li> <Link to="/category/auriculares">Auriculares</Link> </li>
            </ul>
            <CartWidget/>
        </div>
    </div>
);

export default NavBar;