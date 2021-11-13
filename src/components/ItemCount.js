import {useState} from "react"
import { Link } from 'react-router-dom'

const Itemcount = ({onClick}) => {


  const stock = 5
  const initial = 1

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
      <button onClick={restarContador} >-</button>
      <p>{contador}</p>
      <button onClick={sumarContador} >+</button>
      
        <button onClick={ () => onClick(contador)}>Agregar al carrito</button>
      

    </>
  )
}

export default Itemcount
