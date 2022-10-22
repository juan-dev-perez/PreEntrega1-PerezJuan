import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ItemListContainer from '../components/Home/ItemListContainer/ItemListContainer';
import NavBar from '../components/UI/NavBar/NavBar';
import Home from './Home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:category" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;