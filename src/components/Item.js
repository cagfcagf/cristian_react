import { Link } from 'react-router-dom'
import Itemcount from "./ItemCount"




const Item = (props) => {



const {id, title, price, pictureUrl} = props


  return (
    <>
    <div>Producto: {title}</div>
    <div>Precio: ${price}</div>
    <div>URL Imagen:{pictureUrl}</div>
    <Link to={`/item/${id}`}>Ver</Link>
    </>
  )

}

export default Item;
