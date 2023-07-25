import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Hooks } from '../../Hooks/Hooks';
import "./Item.css"

const Item = ({ nombre, marca, tamano, genero, precio, id, img, stock }) => {
    const precioPunto = precio.toLocaleString()
    return (
        <Col>
            <Card className='cardContenedor mb-4 p-2' style={{ width: '19rem', height: '42rem' }}>
                <Card.Img src={img} alt={nombre} className='imgItem' />
                <Card.Body className="d-flex flex-column gap-1">
                    <Card.Title className='tituloCard text-center'>{nombre}</Card.Title>
                    <h6 className='marcaCard text-center mb-3'>{marca} </h6>
                    <p className='tamanoCard'>Tamaño: {tamano}ml</p>
                    <p className='generoCard'>Género: {genero}</p>
                    <p className='precioCard'>Precio: ${precioPunto}</p>
                    <p className='precioCard'>Stock: {stock} unidades disponibles</p>
                    <p className='idCard'>ID: {id}</p>
                    <div className='text-center'>
                        <Button as={Link} to={`/item/${id}`} className='btnDetalle mb-3'>VER DETALLE</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item
