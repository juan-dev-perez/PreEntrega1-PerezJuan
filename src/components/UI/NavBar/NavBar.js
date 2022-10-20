import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => (
    <div className="nav-container">
        <p>Juan's Tech</p>
        <div className='nav-bar'>
            <ul className="nav-bar">
                <li> <a href="/">Home</a> </li>
                <li> <a href="/">Productos</a> </li>
                <li> <a href="/">Ofertas</a> </li>
                <li> <a href="/">Servicios</a> </li>
                <li> <a href="/">Soporte</a> </li>
            </ul>
            <CartWidget/>
        </div>
    </div>
);

export default NavBar;