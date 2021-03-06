import CartWidget from "./CartWidget"
import { NavLink } from 'react-router-dom'
import Item from "./Item"
import {useContext} from "react"
import {contexto} from "./CartContext"

const Navbar = () => {

  const {purchase} = useContext(contexto)

  return (
    <header>
      <NavLink to="/">
        <img src="/logo.png" alt="logo" />
      </NavLink>

      <nav>
        <NavLink to="/categoria/chocolates"> Chocolates </NavLink>
        <NavLink to="/categoria/dulces"> Dulces </NavLink>
        { !(purchase)  && <CartWidget />}
      </nav>

    </header>
  )
}

export default Navbar
