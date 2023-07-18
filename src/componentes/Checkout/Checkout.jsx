import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"


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

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vamos a morir!!");
            })
    }


    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidadTotal}</p>
                            <p>{producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <hr />
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Teléfono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Dirección</label>
                    <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Ingrese la dirección de entrega." />
                </div>


                <div className="form-group">
                    <label htmlFor="">Método de pago: </label>

                    <label htmlFor="">
                        <input type="radio" value={metodoPago} checked={metodoPago === "Tarjeta de Crédito"} onChange={(e) => setMetodoPago(e.target.checked ? "Tarjeta de Crédito" : "")} /> Tarjeta de Crédito
                    </label>

                    <label htmlFor="">
                        <input type="radio" value={metodoPago} checked={metodoPago === "Tarjeta de Débito"} onChange={(e) => setMetodoPago(e.target.checked ? "Tarjeta de Débito" : "")} /> Tarjeta de Débito
                    </label>

                    <label htmlFor="">
                        <input type="radio" value={metodoPago} checked={metodoPago === "Transferencia Bancaria"} onChange={(e) => setMetodoPago(e.target.checked ? "Transferencia" : "")} /> Transferencia Bancaria
                    </label>


                    {/* <input type="radio" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}/>Tarjeta de Débito */}
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error}</p>
                }
                <button type="submit">Finalizar Compra</button>
            </form>
            {
                ordenId && (
                    <strong>Muchas gracias por tu compra! La orden de compra es: {ordenId}</strong>
                )
            }


        </div>
    )
}

export default Checkout