import { useContador } from "./UseContador";
import "./Hooks.css"

export const Hooks = ({ agregar, stock }) => {
    const { contador, incrementar, decrementar } = useContador(1, stock)
    return (
        <>
            <div>
                <button onClick={decrementar} className="btnDecrementar">-</button>
                <strong>{contador}</strong>
                <button onClick={incrementar} className="btnIncrementar">+</button>
            </div>
            <button onClick={() => agregar(contador)} className="btnAgregar d-flex align-items-center justify-content-center mt-1">Agregar al Carrito</button>
        </>
    )
}

