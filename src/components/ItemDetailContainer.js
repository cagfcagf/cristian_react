import {useState, useEffect} from "react"
import Itemdetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import { firestore} from "../firebase"





const Itemdetailcontainer = () => {

  const [productos, setProductos] = useState([]);

  const { id } = useParams();


  const db = firestore
  const collection = db.collection("productos")
  const query = collection.doc(id)
  const promesa = query.get()
  
  
  promesa.then( (documento) => {
    
    const data = documento.data()
    setProductos(data)
  })  
  


  return (
    <>
    <Itemdetail

        title={productos.title}

        price={productos.price}

        pictureUrl={productos.pictureUrl}

        details={productos.details}

      />

    </>
  )

}

export default Itemdetailcontainer;
