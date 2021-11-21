import Itemcount from "./ItemCount"
import {useContext, useState} from "react"
import {contexto} from "./CartContext"
import { Link } from 'react-router-dom'





const Itemdetail = (productos) => {


const {agregarProducto} = useContext(contexto)

const [mostrar, setMostrar] =  useState(false)

const stateUpCount = (cantidad) => {
  agregarProducto(cantidad, productos)

  if(!mostrar) {
    setMostrar(!mostrar)
  }

}

  return (
    <>
    <div className="product-details">
      <img src={productos.pictureUrl} alt="imagen producto"/>
        <div className="product-details-text">
          <h2>{productos.title}</h2>
          <p className="product-details-details">{productos.description}</p>
          <p className="product-details-price">${productos.price}</p>
          <div className="counter">
            <Itemcount onClick={stateUpCount} />
          </div>
         
            {mostrar && <Link to="/cart">
        <button className="go-cart">Ir al carrito</button>
      </Link>     }
          
        </div>

    </div>
    </>
  )

}

export default Itemdetail;
