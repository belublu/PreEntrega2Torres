import Item from "../Item/Item";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({ productos }) => {
    return (
        <div className="container">
            <Row>
                {productos.map(producto => (
                    <Col xs={12} md={6} lg={3} key={producto.id}>
                        <Item {...producto} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ItemList;
