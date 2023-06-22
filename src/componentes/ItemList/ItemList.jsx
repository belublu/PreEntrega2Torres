import Item from "../Item/Item"
import Row from 'react-bootstrap/Row';

const ItemList = ({ productos }) => {
    return (
        <div className="container">
            <Row className="gap-3">
                {productos.map(producto => <Item key={producto.id} {...producto} />)}
            </Row>
        </div>
    )
}

export default ItemList