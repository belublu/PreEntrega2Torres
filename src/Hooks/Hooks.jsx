import { useContador } from "./UseContador";
import "./Hooks.css"

export const Hooks = ({ agregar, stock }) => {
    const { contador, incrementar, decrementar } = useContador(1, stock)
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center mb-2">
                <button onClick={decrementar} className="btnDecrementar me-3">-</button>
                <strong className="">{contador}</strong>
                <button onClick={incrementar} className="btnIncrementar ms-3">+</button>
            </div>
            <button onClick={() => agregar(contador)} className="btnAgregar mt-1">Agregar al Carrito</button>
        </div>
    )
}
