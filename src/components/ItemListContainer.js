import Itemlist from "./ItemList"
import {useState} from "react"
import {useParams} from "react-router-dom"
import Item from "./Item"
import { firestore} from "../firebase"




const Itemlistcontainer = () => {

const [productos, setProductos] = useState([])
const {id} = useParams()




const db = firestore
const collection = db.collection("productos")
const promesa = collection.get()



if (id === undefined) {

promesa.then ( (base) => {




    const base_completa = base.docs.map(doc => ({...doc.data(), id: doc.id}))
   
    setProductos(base_completa)  
  
 


})   } else {
  
  const filtrados = collection.where("category", "==", id)
  const promesa_filtrados = filtrados.get()

  promesa_filtrados.then ( (base) => {


    

    const base_completa = base.docs.map(doc => ({...doc.data(), id: doc.id}))
  

    setProductos(base_completa)  
  
 


}) 



  
}





  return (
    <>
    <div className="product-container-all">
      <Itemlist productos={productos}/>
    </div>
    </>
  )

}

export default Itemlistcontainer;
