import ItemCount from './ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    return (
        <div>
            {
                JSON.stringify(item) === '{}' ?
                '' :
                <div className='card_detail'>
                    <img src={item.pictureUrl} className="img_card" alt={`imagen del producto ${item.title}`}/>
                    <p className='title_card_detail'>{item.title}</p>
                    <p className='description_card_detail'>{item.description}</p>
                    <p className='price_card_detail'>{item.price}</p>
                    <div className='counter_card_detail'><ItemCount stock={item.stock} initial={1}/></div>
                    <p className='id_card_detail'>Id: {item.id}</p>
                </div>
            }
        </div>
    )
}

export default ItemDetail;