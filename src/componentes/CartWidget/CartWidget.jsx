import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'


const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext)
    return (
        <div className='ms-5'>
            <Link to="/cart">
                <img src="../img/carrito.png" alt="Carrito de compras" className='imgCarrito' />
                {
                    cantidadTotal > 0 && <strong className='numeroCarrito'>{cantidadTotal}</strong>

                }

            </Link>
        </div>
    )
}

export default CartWidget