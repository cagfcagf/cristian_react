import {useState} from "react"

const Itemcount = (counter) => {

  const {stock:stock, initial:initial} = counter

  const [contador, setContador] = useState(Number(initial))
  const sumarContador = () => {
    if (contador >= stock) {
      setContador(contador)
    } else

    setContador(contador + 1)

    }


    const restarContador = () => {
      if (contador <= initial) {
        setContador(contador)
      } else

      setContador(contador - 1)

      }


  return (
    <>

      <button onClick={sumarContador} >Aumentar</button>
      <p>El contador es: {contador}</p>
      <button onClick={restarContador} >Disminuir</button>

      <button>Agregar al carrito</button>

    </>
  )
}

export default Itemcount
