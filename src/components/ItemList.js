
import Item from "./Item"

const Itemlist = ({productos}) => {


  return (
    <>
    <ul>
      {productos.map(u => <li key={u.id}>Titulo: {u.title}, Precio: {u.price}, Url: {u.pictureUrl}</li>)}
    </ul>
    <Item />

    </>
  )

}

export default Itemlist;
