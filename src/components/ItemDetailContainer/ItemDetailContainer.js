import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    const getProduct = (idProduct) => {
        const idProd = parseInt(idProduct);
        const db = getFirestore();
        const productosCollection = collection(db, 'productos');
        const q = query(productosCollection, 
            where('id', '==', idProd));
        getDocs(q).then( snapshot => {
            setProduct(snapshot.docs[0].data());
        })
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