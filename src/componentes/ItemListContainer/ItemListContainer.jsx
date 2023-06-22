import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect (() => { 
        getProductos()
        .then (respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
    }, [])

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