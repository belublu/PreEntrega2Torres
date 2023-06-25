import { useContador } from "./UseContador";
import "./Hooks.css"

export const Hooks = () => {
    const {contador, incrementar, decrementar} = useContador(1, 10)
    return (
        <div>
            <button onClick={decrementar} className="btnDecrementar">-</button>
            <strong>{contador}</strong>
            <button onClick={incrementar} className="btnIncrementar">+</button>
        </div>
    )
}