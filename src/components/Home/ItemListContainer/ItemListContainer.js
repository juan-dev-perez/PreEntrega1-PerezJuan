import './ItemListContainer.css';
// import ItemCount from '../../ItemCount';
import apiProducts from '../../../apiEcommerce/apiEcommerce';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const getProducts = (prods) => {
        setTimeout(() => {
            setProducts(prods);
        },2000);
    }

    // const verifyCategory = () => {
    //     let cat = category;
    //     if (cat) {
    //         setProducts(products.filter( product => product.category === cat));
    //         console.log(products);
    //     }
    // }

    useEffect(() => {
        getProducts(apiProducts);
        // verifyCategory();
    },[]);

    return (
        <div className="item_list_container">
            {!category ? 
                <h1 className="title_item_list_container"> Todos los productos </h1> : 
                <h1 className="title_item_list_container"> {category} </h1>
            }
            <ItemList items={products}/>
            {/* <ItemCount stock={10} initial={1}/> */}
        </div>
    );
};

export default ItemListContainer;