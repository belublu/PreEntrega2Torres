import { useState } from "react";

export const useContador = (inicial, stock) => {
    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1){
            setContador (contador - 1)
        }
    }

    return {contador, incrementar, decrementar}
}
