import { useContador } from "./UseContador";
import "./Hooks.css"

export const Hooks = ({ agregar, stock }) => {
    const { contador, incrementar, decrementar } = useContador(1, stock)
    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <button onClick={decrementar} className="btnDecrementar">-</button>
                <strong className="">{contador}</strong>
                <button onClick={incrementar} className="btnIncrementar">+</button>
            </div>
            <button onClick={() => agregar(contador)} className="btnAgregar w-100 h-25 p-3 my-3 d-flex align-items-center">Agregar al Carrito</button>
        </div>
    )
}
