import {useContext, useState} from "react"
import {contexto} from "./CartContext"
import { Link } from 'react-router-dom'
import { firestore } from "../firebase"

const Cart = () => {

const {cart, vaciar, borrarProducto, purchaseid} = useContext(contexto)
const [purchase, setPurchase] = useState()

let sum = 0

for (let i = 0; i < cart.length; i++) {
    sum += (cart[i].cantidad *cart[i].productos.price);
}

const finalizarCompra = () => {
    const usuario = {
      nombre: "Cristian Godoy",
      email: "cagf@gmail.com",
      telefono: "974523651",
    }

    const orden = {
      buyer: usuario,
      items: cart,
      total: sum,
      date: new Date(),
    }

    const db = firestore
    const collection = db.collection("ordenes")
    const query = collection.add(orden)
    
  

    query.then( (resultado) => {
      setPurchase(resultado.id)
      purchaseid(resultado.id)

    }

    )}




  return (
    <>

    
      {!(sum == 0) ?  <div>
        {(purchase) && <p className="pedido-realizado">Tu pedido numero {purchase} ha sido recibido con exito.</p>    }
        <div>
          {cart.map(u => <div className="listado"><img src={u.productos.pictureUrl} alt="imagen producto"/><p>{u.cantidad}            {u.productos.title}            ${u.productos.price}                                                                                                                 ${u.productos.price*u.cantidad}</p>
          { !(purchase)  && <button className="button-small" id={cart.findIndex(element => element.productos.title == u.productos.title)} onClick={borrarProducto}>Eliminar</button>}
          </div>)}
        </div>
        <div className="total-cart">
        Valor total:  ${sum}
        </div>
        { !(purchase) && <div>
        <button className="button-finish" onClick={finalizarCompra}>Finalizar compra</button>
        </div>}
        <div>
        { !(purchase)  && <button className="button-vaciar" onClick={vaciar}>Vacia el carro</button>             }
        </div>
      </div> : <div className="carro-vacio"><p>🛒 Tu carro esta vacio</p><Link to="/">
        <button>Ver catalogo</button>
      </Link></div>}

    </>
  )

}



export default Cart;
