import {useContext} from "react"
import {contexto} from "./CartContext"


const CartWidget = () => {

  const {cart} = useContext(contexto)





  return (
    <>
    <span class="material-icons">
shopping_cart
</span>
<p></p>
</>
  )
}

export default CartWidget
