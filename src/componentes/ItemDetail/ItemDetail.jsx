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

const ItemDetail = ({ id, nombre, precio, marca, tamano, img, descripcion, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const { agregarProducto } = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = { id, nombre, precio, img }
        agregarProducto(item, cantidad)
    }



    return (
        <div className='container mt-5'>
            <Row className='align-items-center justify-content-center'>
                <Col sm={12} md={8} lg={8}>
                    <Card className='cardContenedor cardContenedorDetail mx-auto mb-4' style={{ height: '100vh' }}>
                        <Card.Img variant="top" src={img} className='imgItem' />
                        <Card.Body>
                            <Card.Title className='tituloCard text-center'>{nombre}</Card.Title>
                            <h6 className='marcaCard text-center'>{marca}</h6>
                            <p className='tamanoCard'>Tamaño:{tamano}ml</p>
                            <p className='precioCard'>Precio: $ {precio}</p>
                            <p className='descripcionCard'>{descripcion}</p>

                            <div className='d-flex flex-row justify-content-center mt-5'>
                                {
                                    agregarCantidad > 0 ? (
                                        <>
                                            <Link to="/" className='finalizarCompra mt-1'>
                                                SEGUIR COMPRANDO
                                            </Link>

                                            <Link to="/cart" className='finalizarCompra mt-1'>
                                                FINALIZAR COMPRA
                                            </Link>
                                        </>
                                    ) : (
                                        <Hooks inicial={1} stock={stock} agregar={manejadorCantidad} />)


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
