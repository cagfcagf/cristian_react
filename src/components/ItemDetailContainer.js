import {useState, useEffect} from "react"
import Itemdetail from "./ItemDetail"
import {useParams} from "react-router-dom"

const product_details = [
  { id: 1, title: "Chocolate Lover", price: 17990, pictureUrl:"http://www", details:"Rica caja de dulces"},
  { id: 2, title: "Happy Rainbow", price: 17990, pictureUrl:"http://www", details:"Rica caja de dulces"},
  { id: 3, title: "Yummy Gummies", price: 17990, pictureUrl:"http://www", details:"Rica caja de dulces"},
  { id: 4, title: "Sweet Love", price: 17990, pictureUrl:"http://www", details:"Rica caja de dulces"},
]




const Itemdetailcontainer = () => {

  const [productos, setProductos] = useState([])
  const {id} = useParams()



const productos_filtrados = product_details.filter(filtrado => filtrado.id == id)



const promesa = new Promise((res, rej) => {


  setTimeout(() => {
    res(setProductos(productos_filtrados))
  }, 2000)



})

  return (
    <>
    <Itemdetail title={productos_filtrados.title} price={productos_filtrados.price} pictureUrl={productos_filtrados.pictureUrl} details={productos_filtrados.details}/>

    </>
  )

}

export default Itemdetailcontainer;
