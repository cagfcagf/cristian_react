
import {useState} from "react"

const Item = (props) => {


const promesa = new Promise((res, rej) => {

  setTimeout(() => {
    res(setProductos([props]))
  }, 2000)

})


const [productos, setProductos] = useState([])




  return (
    <>
      <p></p>
      <ul>
        {productos.map(u => <li key={u.id}>Titulo: {u.title}, Precio: {u.price}, Url: {u.pictureUrl}</li>)}
      </ul>

    </>
  )

}

export default Item;


// {productos.map(u => <li>{u.id}</li>)}
