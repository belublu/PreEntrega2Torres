import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
/* import ItemCount from '../ItemCount/ItemCount'; */
import { Hooks } from '../../Hooks/Hooks';
import "./Item.css"

const Item = ({ nombre, marca, tamano, genero, precio, id, img }) => {
    const precioPunto = precio.toLocaleString()
    return (
        <Col>
            <Card className='cardContenedor mb-4' style={{ width: '18rem', height: '41rem' }}>
                <Card.Img src={img} alt={nombre} className='imgItem' />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className='tituloCard text-center'>{nombre}</Card.Title>
                    <h6 className='marcaCard text-center'>{marca} </h6>
                    <p className='tamanoCard'>Tamaño:{tamano}ml</p>
                    <p className='generoCard'>Género:{genero}</p>
                    <p className='precioCard'>Precio:${precioPunto}</p>
                    <p className='idCard'>ID:{id}</p>
                    <div className='d-flex flex-row justify-content-center'>
                        <Hooks />
                    </div>
                    <div className='text-center'>
                        {/* <Link to={`/item/${id}`}>VER DETALLES</Link> */}
                        <Button as={Link} to={`/item/${id}`} className='btnDetalle'>VER DETALLE</Button>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item
