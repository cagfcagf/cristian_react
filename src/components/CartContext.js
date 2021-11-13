import { createContext, useState } from "react"

export const contexto = createContext()

const { Provider } = contexto

const CustomComponent   = ({children}) => {

  const [cart, setCart] = useState([])

  const agregarProducto = (cantidad, productos) => {

    const found = cart.findIndex(element => element.productos.title == productos.title);
  


    if (found == -1) {
      setCart([...cart, {cantidad, productos} ])
    } else {
      const nueva_cantidad = cart[found].cantidad + cantidad
      
      cart.splice(found,1)
 


      setCart([...cart, {cantidad: nueva_cantidad, productos} ])
      

    } 

    

  }

  

  const borrarProducto = (e) => {
    
    const found = e.target.id
    cart.splice(found,1)
    
    setCart([...cart])
 

  }

  const vaciar = () => {
    setCart([])
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
