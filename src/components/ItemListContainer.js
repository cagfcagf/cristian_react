import Itemlist from "./ItemList"
import {useState} from "react"
import {useParams} from "react-router-dom"
import Item from "./Item"
import { firestore} from "../firebase"


const products_base = [
  { id: 1, title: "Chocolate Lover", price: 17990, pictureUrl:"../media/chocolate.jpg", category:"dulces"},
  { id: 2, title: "Happy Rainbow", price: 17990, pictureUrl:"../media/happy.jpg", category:"chocolates"},
  { id: 3, title: "Yummy Gummies", price: 17990, pictureUrl:"../media/yummy.jpg", category:"dulces"},
  { id: 4, title: "Sweet Love", price: 17990, pictureUrl:"../media/sweet.jpg", category:"chocolates"},
]

const Itemlistcontainer = () => {

const [productos, setProductos] = useState([])
const {id} = useParams()




const db = firestore
const collection = db.collection("productos")
const promesa = collection.get()

promesa.then ( (base) => {

  if (id === undefined) {

    const base_completa = base.docs.map(doc => doc.data())

    setProductos(base_completa)  
  
  } else {
      const base_completa = base.docs.map(doc => doc.data())
      const productos_filtrados = base_completa.filter(filtrado => filtrado.category == id)
      setProductos(productos_filtrados)  

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
