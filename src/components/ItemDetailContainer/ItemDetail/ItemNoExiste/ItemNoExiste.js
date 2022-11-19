import { Link } from "react-router-dom";

const ItemNoExiste = ({id}) => {
    return (
        <div>
            <div>El producto con el id {id} no existe</div>
            <div>
                <Link to='/'>Volver al inicio</Link>
            </div>
        </div>
    )
}

export default ItemNoExiste;