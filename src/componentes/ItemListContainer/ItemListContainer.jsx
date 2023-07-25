import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query, getDoc } from "firebase/firestore"
import { db } from "../../services/config"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    useEffect (() => {
        const misProductos = idCategoria ? query(collection (db, "inventario") , where ("idCat", "==", idCategoria)) : collection (db, "inventario")
        
        getDocs(misProductos)
            .then (res=> {
                const nuevosProductos = res.docs.map(doc=> {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos)
            })
            .catch(error => console.log(error))
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