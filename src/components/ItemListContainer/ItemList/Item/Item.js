import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    return (
        <Link className='card' to={`/item/${item.id}`}>
            <img src={item.pictureUrl} className="img_card" alt={`imagen del producto ${item.title}`}/>
            <p className='title_card'>{item.title}</p>
            <p className='description_card'>{item.description}</p>
            <p className='price_card'>${item.price.toLocaleString("es")}</p>
            <p className='id_card'>Id: {item.id}</p>
        </Link>
    )
}

export default Item;