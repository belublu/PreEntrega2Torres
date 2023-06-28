import { useState, useEffect } from "react"
import { getProductos, getProductosCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()
    
    useEffect (() => {
        const funcion = idCategoria ?  getProductosCategoria : getProductos

        funcion (idCategoria)
            .then (respuesta => setProductos(respuesta))
    }, [idCategoria])
    
    return (
        <main className="mainProductos">
            <>
                <h2 className='text-center m-5'>{greeting}</h2>
                <ItemList productos={productos}/>
            </>
        </main>
    )
}

export default ItemListContainer