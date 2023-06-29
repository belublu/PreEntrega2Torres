import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Hooks } from '../../Hooks/Hooks';
import "./ItemDetail.css"


const ItemDetail = ({ nombre, precio, marca, tamano, img, descripcion }) => {
    
    return (
        <div className='container mt-5'>
            <Row>
                <Col>
                    <Card className='cardContenedor mx-auto mb-4' style={{ width: '85%', height: '51rem' }}>
                        <Card.Img variant="top" src={img} className='imgItem'/>
                        <Card.Body>
                            <Card.Title className='tituloCard text-center'>{nombre}</Card.Title>
                            <h6 className='marcaCard text-center'>{marca}</h6>
                            <p className='tamanoCard'>Tamaño:{tamano}ml</p>
                            <p className='precioCard'>Precio: $ {precio}</p>
                            <p className='descripcionCard'>{descripcion}</p>
                            <div className='d-flex flex-row justify-content-center mt-5'>
                                <Hooks />
                            </div>
                            <div className='d-flex flex-row justify-content-center'>
                                <Button className='btnAgregar'>AGREGAR</Button>
                            </div>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default ItemDetail
