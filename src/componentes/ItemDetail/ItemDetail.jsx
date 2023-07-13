import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Hooks } from '../../Hooks/Hooks';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, marca, tamano, img, descripcion, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const { agregarProducto } = useContext(CarritoContext)
    
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = { id, nombre, precio }
        agregarProducto(item, cantidad)
    }

    return (
        <div className='container mt-5'>
            <Row>
                <Col>
                    <Card className='cardContenedor mx-auto mb-4' style={{ width: '85%', height: '51rem' }}>
                        <Card.Img variant="top" src={img} className='imgItem' />
                        <Card.Body>
                            <Card.Title className='tituloCard text-center'>{nombre}</Card.Title>
                            <h6 className='marcaCard text-center'>{marca}</h6>
                            <p className='tamanoCard'>Tamaño:{tamano}ml</p>
                            <p className='precioCard'>Precio: $ {precio}</p>
                            <p className='descripcionCard'>{descripcion}</p>
                            {/* <div className='d-flex flex-row justify-content-center mt-5'>
                                <Hooks />
                            </div> */}
                            {/* <div className='d-flex flex-row justify-content-center'>
                                <Button className='btnAgregar'>AGREGAR</Button>
                            </div> */}
                            <div className='d-flex flex-row justify-content-center mt-5'>
                                {
                                    agregarCantidad > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<Hooks inicial={1} stock={stock} agregar={manejadorCantidad} />)
                                }
                            </div>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default ItemDetail
