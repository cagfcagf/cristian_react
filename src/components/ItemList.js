
import Item from "./Item"


const Itemlist = ({productos}) => {


  return (
    <>

      {productos.map(u => <Item id={u.id} title={u.title} price={u.price} pictureUrl={u.pictureUrl} category={u.category}/>)}



    </>
  )

}

export default Itemlist;
