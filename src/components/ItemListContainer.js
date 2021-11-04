import Itemlist from "./ItemList"
import {useState} from "react"
import {useParams} from "react-router-dom"

const products_base = [
  { id: 1, title: "Chocolate Lover", price: 17990, pictureUrl:"http://www"},
  { id: 2, title: "Happy Rainbow", price: 17990, pictureUrl:"http://www"},
  { id: 3, title: "Yummy Gummies", price: 17990, pictureUrl:"http://www"},
  { id: 4, title: "Sweet Love", price: 17990, pictureUrl:"http://www"},
]

const Itemlistcontainer = () => {

const [productos, setProductos] = useState([])
const {id} = useParams()



const promesa = new Promise((res, rej) => {

  setTimeout(() => {
    res(setProductos(products_base))
  }, 2000)

})


  return (
    <>
    <Itemlist productos={productos}/>

    </>
  )

}

export default Itemlistcontainer;
