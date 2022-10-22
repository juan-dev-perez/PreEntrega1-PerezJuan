import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className="item_list">
            {items.map((item, i) => (
                <div key={i} className="card_container">
                    <Item item = {item}/>
                    {/* {item.category} */}
                    {/* {item.description}
                    {item.price} */}
                </div>
            ))}
        </div>
    )
}

export default ItemList;