import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../CartItem/CartItem.css"

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext)

    return (
        <div className="container">
            <Row>
                <Col>
                    <img src={item.img} alt="Foto producto en carrito" className="productoEnCarrito m-5" />
                </Col>
                <Col className="d-flex align-items-center justify-content-center me-5">
                    <h4> {item.nombre} </h4>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <p> Cantidad: {cantidad}</p>
                    <p>Precio: ${item.precio.toLocaleString()} cada uno</p>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                </Col>
                <hr />
            </Row>

        </div>
    )
}

export default CartItem