import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/Home/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/Home/ItemListContainer/ItemListContainer';
import NavBar from '../components/UI/NavBar/NavBar';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/*" element={<ItemListContainer/>}/>
                <Route path="/category/:category" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;