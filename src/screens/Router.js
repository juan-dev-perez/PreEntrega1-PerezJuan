import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/UI/NavBar/NavBar';
import Home from './Home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;