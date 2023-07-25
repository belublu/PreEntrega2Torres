import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { Row, Col } from "react-bootstrap"
import "./Checkout.css"

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [metodoPago, setMetodoPago] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const [formularioEnviado, setFormularioEnviado] = useState(false)

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    const manejadorFormulario = (event) => {
        event.preventDefault()

        if (!nombre || !apellido || !telefono || !direccion || !email || !emailConfirmacion || !metodoPago) {
            setError("Por favor completa todos los campos.")
            return
        }

        if (email !== emailConfirmacion) {
            setError("Los campos de email no coinciden.")
            return
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            direccion,
            email,
            metodoPago
        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id)

                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
                    .then(() => {
                        addDoc(collection(db, "ordenes"), orden)
                            .then((docRef) => {
                                setOrdenId(docRef.id)
                                vaciarCarrito()
                                setFormularioEnviado(true)
                            })
                            .catch((error) => {
                                console.log("Error al crear la orden de compra.")
                                setError("Error al crear la orden de compra. Por favor intentelo nuevamente.")
                            })
                    })
                    .catch((error) => {
                        console.log("No se puede actualizar el stock.")
                        setError("No se puede actualizar el error.")
                    })
            })
        )
    }

    return (
        <div className="container">
            {formularioEnviado ? (
                <div className="container">
                    <h2 className=" text-center mt-5">Muchas gracias por su compra!</h2>
                    <p className="ordenCompra text-center mt-5"> Su código de orden es: {ordenId}</p>
                </div>
            ) : (
                <div>

                    <form onSubmit={manejadorFormulario}>
                        <Row className="mt-5">
                            <Col lg={6} >
                                <h2 className="text-center mt-5">Detalle de productos</h2>
                                <div className="d-flex flex-row flex-wrap justify-content-center">
                                    {
                                        carrito.map(producto => (
                                            <div key={producto.item.id} className="d-flex flex-column align-items-center mx-2 p-4">
                                                <div>
                                                    <img src={producto.item.img} alt={producto.item.nombre} className="imgProductoCheckout mb-3" />
                                                </div>
                                                <p className="marcaCheckout mb-2">{producto.item.marca}</p>
                                                <p className="nombreCheckout mb-1">{producto.item.nombre}</p>
                                                <p className="cantidadCheckout mb-1">Cantidad: {producto.cantidad}</p>
                                                <p className="subtotalCheckout">Subtotal: ${(producto.item.precio * producto.cantidad).toLocaleString()}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <h5 className="totalCheckout text-center mb-4">Total de la compra: ${total.toLocaleString()}</h5>
                            </Col>

                            <Col lg={6}>
                                <div className="text-center" style={{ border: "solid 3px rgb(234, 95, 118)", borderRadius: "10px" }}>
                                    <h2 className="text-center mt-5">Formulario de compra</h2>

                                    <div className="form-group d-flex flex-column align-items-center m-3">
                                        <label htmlFor="" className="formCheckoutFinal">Nombre</label>
                                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="col-8" />
                                    </div>

                                    <div className="form-group d-flex flex-column align-items-center m-3">
                                        <label htmlFor="" className="formCheckoutFinal">Apellido</label>
                                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} className="col-8" />
                                    </div>

                                    <div className="form-group d-flex flex-column align-items-center m-3">
                                        <label htmlFor="" className="formCheckoutFinal">Teléfono</label>
                                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="col-8" />
                                    </div>

                                    <div className="form-group d-flex flex-column align-items-center m-3">
                                        <label htmlFor="" className="formCheckoutFinal">Dirección</label>
                                        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="col-8" />
                                    </div>

                                    <div className="form-group align-items-center m-3">
                                        <label htmlFor="" className="formCheckoutFinal">Método de pago: </label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <label htmlFor="" className="d-flex align-items-center opcionesPago">
                                                    <input type="radio" value={metodoPago} checked={metodoPago === "Tarjeta de Crédito"} onChange={(e) => setMetodoPago(e.target.checked ? "Tarjeta de Crédito" : "")} className="me-2" /> Tarjeta de Crédito
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label htmlFor="" className="d-flex align-items-center opcionesPago mx-2">
                                                    <input type="radio" value={metodoPago} checked={metodoPago === "Tarjeta de Débito"} onChange={(e) => setMetodoPago(e.target.checked ? "Tarjeta de Débito" : "")} className="me-2" /> Tarjeta de Débito
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label htmlFor="" className="d-flex align-items-center opcionesPago">
                                                    <input type="radio" value={metodoPago} checked={metodoPago === "Transferencia Bancaria"} onChange={(e) => setMetodoPago(e.target.checked ? "Transferencia" : "")} className="me-2" /> Transferencia Bancaria
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex flex-column align-items-center m-3">
                                        <label htmlFor="" className="formCheckoutFinal">Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-8" />
                                    </div>

                                    <div className="form-group d-flex flex-column align-items-center m-3">
                                        <label htmlFor="" className="formCheckoutFinal">Confirmar Email</label>
                                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} className="col-8" />
                                    </div>
                                    <button type="submit" className="btnFinalizarCheckout mb-5">ENVIAR</button>
                                    {
                                        error && <p style={{ color: "red", fontWeight: "500" }}> {error}</p>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Checkout