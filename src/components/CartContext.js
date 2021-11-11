import { createContext, useState } from "react"

export const contexto = createContext()

const { Provider } = contexto

const CustomComponent   = ({children}) => {

  const [cart, setCart] = useState([])

  const agregarProducto = (cantidad, productos) => {

    if (!isInCart(productos.title)) {
      setCart([...cart, {cantidad, productos} ])
    }

    console.log(cart)

  }

  const borrarProducto = () => {

  }

  const vaciar = () => {
    setCart([])
  }

  const isInCart = (venta) => {

    const found = cart.find(element => element.productos.title == venta);

    if (found == undefined) {
      return false
    } else {
      return true
    }

  }


  const valorDelContexto = {
    cart: cart,
    agregarProducto: agregarProducto,
    borrarProducto: borrarProducto,
    vaciar: vaciar
  }

  return (
    <Provider value={valorDelContexto}>
      {children}

    </Provider>

  )


}

export default CustomComponent
