import { useState, useEffect } from "react"
/* import { getProducto } from "../../asyncmock" */
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/config"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const { idItem } = useParams()

    useEffect(() => {
        const nuevoDoc = doc(db, "inventario", idItem)

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                const nuevosProducto = { id: res.di, ...data }
                setProducto(nuevosProducto)
            })
            .catch(error => console.log(error))
    }, [idItem])

    /* useEffect(() => {
        getProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem])
 */
    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer

