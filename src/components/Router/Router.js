import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import OrderSuccess from '../Cart/OrderSuccess/OrderSuccess';
import ItemNoExiste from '../ItemDetailContainer/ItemDetail/ItemNoExiste/ItemNoExiste';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import NavBar from '../UI/NavBar/NavBar';

const Router = () => {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/*" element={<ItemListContainer/>}/>
                    <Route path="/category/:category" element={<ItemListContainer/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={ <Cart/> }/>
                    <Route path="/order-success/:orderId" element={ <OrderSuccess/> }/>
                    <Route path="/item-not-found/:id" element={ <ItemNoExiste/> }/>
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default Router;