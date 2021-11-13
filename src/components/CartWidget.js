import {useContext} from "react"
import {contexto} from "./CartContext"
import { Link } from 'react-router-dom'


const CartWidget = () => {

  const {cart} = useContext(contexto)
  let sum = 0

  for (let i = 0; i < cart.length; i++) {
      sum += cart[i].cantidad;
  }




  return (
    <>
    {!(sum == 0) && 
    <div className="cart-widget">
      <Link to="/Cart">
        <span class="material-icons">
      shopping_cart
      </span>
      </Link>

      <p>{sum}</p>
    </div>}
</>
  )
}

export default CartWidget
