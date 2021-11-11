import Itemcount from "./ItemCount"
import {useContext} from "react"
import {contexto} from "./CartContext"



const Itemdetail = (productos) => {

const {agregarProducto} = useContext(contexto)

const stateUpCount = (cantidad) => {
  agregarProducto(cantidad, productos)
}

  return (
    <>
    <div className="product-details">
      <img src={productos.pictureUrl} alt="imagen producto"/>
        <div className="product-details-text">
          <h2>{productos.title}</h2>
          <p className="product-details-details">{productos.details}</p>
          <p className="product-details-price">${productos.price}</p>
          <div className="counter">
            <Itemcount onClick={stateUpCount} />
          </div>
        </div>

    </div>
    </>
  )

}

export default Itemdetail;
