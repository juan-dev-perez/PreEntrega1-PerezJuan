import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail';
import { getProductById } from '../../apiEcommerce/apiEcommerce';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    const getProduct = (idProduct) => {
        // setTimeout(() => {
            setProduct(getProductById(idProduct));
        // }, 2000);
    }

    useEffect( () => {
        getProduct(id);
    }, [id])

    return (
        <div className='item_detail_container'>
            <div className="item_list ">
                <ItemDetail item={product}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;