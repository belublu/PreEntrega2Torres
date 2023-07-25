
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)
    /* console.log(carrito[0].item.id, "Esto es carrito id") */
    const totalPunto = total.toLocaleString()

    if (cantidadTotal === 0) {
        return (
            <div className="container d-flex justify-content-center">
                <Row className="mt-5">
                    <Col className="text-center">
                        <h2 className="mt-5">No hay productos en el carrito.</h2>
                        <Link to={"/"} className="linkCarrito">Haciendo click acá podés encontrar los productos disponibles en nuestra tienda.</Link>
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <Row>
                <Col xs={12} md={8} lg={12}>
                    {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={8} lg={12}>
                    <div className="d-flex flex-column align-items-center">
                        <h4>Total: ${totalPunto}</h4>
                        <h5>Cantidad de productos: {cantidadTotal}</h5>
                        <div className="d-flex flex-row justify gap-5">
                            <button onClick={() => vaciarCarrito()} className="btnCartVaciar mb-4">Vaciar carrito</button>
                            <Link to="/checkout" className="btnCartFinalizar text-center p-1">Finalizar compra</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Cart