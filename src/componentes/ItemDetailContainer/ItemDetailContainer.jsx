import { useState, useEffect } from "react"
import { getProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    useEffect (() => {
        getProducto(5)
            .then (res => setProducto(res))
    },[])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer

