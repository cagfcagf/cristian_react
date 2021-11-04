import { NavLink } from 'react-router-dom'

const Item = () => {


  return (
    <>

    <NavLink to="/item/1">
      <p> Item </p>
    </NavLink>


    </>
  )

}

export default Item;


// {productos.map(u => <li>{u.id}</li>)}
