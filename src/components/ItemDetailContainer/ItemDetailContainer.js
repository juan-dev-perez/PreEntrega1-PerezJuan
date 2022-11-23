import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const getProduct = async (idProduct) => {
        try{
            const idProd = parseInt(idProduct);
            const db = getFirestore();
            const productosCollection = collection(db, 'productos');
            const q = query(productosCollection, 
                where('id', '==', idProd));
                await getDocs(q).then( snapshot => {
                    setProduct(snapshot.docs[0].data());
                })
        }catch(e){
            navigate(`/item-not-found/${id}`);
        }
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