import './Item.css';

const Item = ({item}) => {
    return (
        <div className='card'>
            <img src={item.pictureUrl} className="img_card" alt={`imagen del producto ${item.title}`}/>
            <p className='title_card'>{item.title}</p>
            <p className='description_card'>{item.description}</p>
            <p className='price_card'>{item.price}</p>
            <p className='id_card'>Id: {item.id}</p>
        </div>
    )
}

export default Item;