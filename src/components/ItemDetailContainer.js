import {useState, useEffect} from "react"
import Itemdetail from "./ItemDetail"
import {useParams} from "react-router-dom"

const Itemdetailcontainer = () => {

const importacion = fetch('https://fakestoreapi.com/products')

importacion
.then( (data) => {
  const productos_json = data.json()
  return productos_json


})
.then( (array_de_productos) => {
    const producto1 =  array_de_productos[0]

      setTimeout( () => {
        setDatos(producto1);
      }, 3000);


})

const [datos, setDatos] = useState([])



  return (
    <>

      <Itemdetail id={datos.id} title={datos.title} price={datos.price} pictureUrl={datos.image}/>

    </>
  )

}

export default Itemdetailcontainer;
