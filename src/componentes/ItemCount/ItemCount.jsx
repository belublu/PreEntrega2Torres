/* import { useState } from "react";

const ItemCount = ({ inicial, stock, agregarItem }) => {
    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > stock) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div>
                <button onClick={decrementar}> - </button>
                <p>{contador}</p>
                <button onClick={incrementar}> + </button>
            </div>
            <button onClick={() => agregarItem(contador)}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount */