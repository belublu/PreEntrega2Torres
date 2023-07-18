
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
/* import { getProducto } from "../../asyncmock" */

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)
    /* console.log(carrito[0].item.id, "Esto es carrito id") */
    const totalPunto = total.toLocaleString()

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito.</h2>
                <Link to={"/"}>Acá podés mirar los productos disponibles en nuestra tienda.</Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}


            <h3>Total: ${totalPunto}</h3>
            <h3>Cantidad de productos: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div>
    )
    
}

export default Cart