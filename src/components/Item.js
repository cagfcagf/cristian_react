import { Link } from 'react-router-dom'
import Itemcount from "./ItemCount"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';




const Item = (props) => {



const {id, title, price, pictureUrl} = props


  return (
    <>

    <Col xs="3" className="product-container">
      <img src={pictureUrl} alt="imagen producto"/>
      <p>{title}</p>
      <p>${price}</p>
      <Link to={`/item/${id}`} className="ver-mas">Ver</Link>
    </Col>
    </>
  )

}

export default Item;
