import Itemlist from "./ItemList"
import {useState} from "react"
import {useParams} from "react-router-dom"
import Item from "./Item"


const products_base = [
  { id: 1, title: "Chocolate Lover", price: 17990, pictureUrl:"../media/chocolate.jpg", category:"dulces"},
  { id: 2, title: "Happy Rainbow", price: 17990, pictureUrl:"../media/happy.jpg", category:"chocolates"},
  { id: 3, title: "Yummy Gummies", price: 17990, pictureUrl:"../media/yummy.jpg", category:"dulces"},
  { id: 4, title: "Sweet Love", price: 17990, pictureUrl:"../media/sweet.jpg", category:"chocolates"},
]

const Itemlistcontainer = () => {

const [productos, setProductos] = useState([])
const {id} = useParams()


const productos_filtrados = products_base.filter(filtrado => filtrado.category == id)




const promesa = new Promise((res, rej) => {

if (id === undefined) {

  setTimeout(() => {
    res(setProductos(products_base))
  }, 2000)

} else {
  setTimeout(() => {
    res(setProductos(productos_filtrados))
  }, 2000)
}



})


  return (
    <>
    <div className="product-container-all">
      <Itemlist productos={productos}/>
    </div>
    </>
  )

}

export default Itemlistcontainer;
