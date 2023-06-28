import React from 'react'
import './CartWidget.css'


const CartWidget = () => {
    return (
        <div className='ms-5'>
            <img src="../img/carrito.png" alt="Carrito de compras" className='imgCarrito' />
            <strong className='numeroCarrito'>10</strong>
        </div>
    )
}

export default CartWidget