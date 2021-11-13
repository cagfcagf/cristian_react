import {useContext} from "react"
import {contexto} from "./CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {

const {cart, vaciar, borrarProducto} = useContext(contexto)


let sum = 0

for (let i = 0; i < cart.length; i++) {
    sum += (cart[i].cantidad *cart[i].productos.price);
}




  return (
    <>
      {!(sum == 0) ? <div>
        <div>
          {cart.map(u => <div className="listado"><img src={u.productos.pictureUrl} alt="imagen producto"/><p>{u.cantidad}            {u.productos.title}            ${u.productos.price}                                                                                                                 ${u.productos.price*u.cantidad}</p>
          <button className="button-small" id={cart.findIndex(element => element.productos.title == u.productos.title)} onClick={borrarProducto}>Eliminar</button>
  
          </div>)}
        </div>
        <div className="total-cart">
        Valor total:  ${sum}
        </div>
        <div>
        <button className="button-vaciar" onClick={vaciar}>Vacia el carro</button>
        </div>
      </div> : <div className="carro-vacio"><p>🛒 Tu carro esta vacio</p><Link to="/">
        <button>Ver catalogo</button>
      </Link></div>}

    </>
  )

}



export default Cart;
