import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./Item.css"
import ItemCount from '../ItemCount/ItemCount';


const Item = ({ nombre, marca, tamano, genero, precio, id, img }) => {
    const precioPunto = precio.toLocaleString()
    return (
        <Col>
            <Card className='cardContenedor' style={{ width: '18rem', height: '38rem' }}>
                <Card.Img variant="top" src={img} alt={nombre} className='imgItem' />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className='tituloCard text-center'>{nombre}</Card.Title>
                    <h6 className='marcaCard text-center'>{marca} </h6>
                    <p className='tamanoCard'>Tamaño: {tamano}ml</p>
                    <p className='generoCard'>Género: {genero} </p>
                    <p className='precioCard'>Precio: $ {precioPunto} </p>
                    <p className='idCard'>ID: {id} </p>
                    <div className='d-flex flex-row'>
                        <ItemCount/>
                    </div>
                    <div className='text-center'>
                        <Button className='btnDetalle'>DETALLE</Button>
                    </div>
                    
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item
/* 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Item({ nombre, marca, tamano, genero, precio, id, img }) {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 2 }).map((idx) => (
                <Col key={idx}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} alt={nombre} />
                        <Card.Body>
                            <Card.Title>{nombre}</Card.Title>
                            <h5>{marca} </h5>
                            <p>Tamaño: {tamano} </p>
                            <p>Género: {genero} </p>
                            <p>Precio: {precio} </p>
                            <p>ID: {id} </p>
                            <Button variant="primary">Ver detalle</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Item; */