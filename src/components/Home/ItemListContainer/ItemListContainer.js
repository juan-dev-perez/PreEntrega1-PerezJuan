import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container_greeting">
            <p className="greeting"> { greeting } </p>
        </div>
    );
};

export default ItemListContainer;