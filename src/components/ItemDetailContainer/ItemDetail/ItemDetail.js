import { useState, useContext } from 'react';
import ItemCount from './ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from "../../../context/CartContext";
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const { addItem, carCountIcon } = useContext(CartContext);
    const [ canti, setCanti] = useState(0);

    const onAdd = (cantidad) => {
        addItem({...item, cantidad});
        carCountIcon(cantidad);
        setCanti(cantidad);
    }

    return (
        <div>
            {
                JSON.stringify(item) === '{}' ? 
                    <div className='spinner_container'>
                        <div className='spinner'></div>
                    </div> :
                <div className='card_detail'>
                    <img src={item.pictureUrl} className="img_card" alt={`imagen del producto ${item.title}`}/>
                    <p className='title_card_detail'>{item.title}</p>
                    <p className='description_card_detail'>{item.description}</p>
                    <p className='price_card_detail'>${item.price.toLocaleString("es")}</p>
                    { canti !== 0 && <p className='added_to_cart'>Producto agregado al carrito</p>  }
                    <div className='counter_card_detail'>
                        {
                            canti === 0 ? 
                                <ItemCount stock={item.stock} initial={1} cant={onAdd}/>
                            :
                                <Link to='/cart' className='btn_to_cart'>Terminar mi compra</Link>
                        }
            
                    </div>
                    <p className='id_card_detail'>Id: {item.id}</p>
                </div>
            }
        </div>
    )
}

export default ItemDetail;