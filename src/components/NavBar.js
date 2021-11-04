import CartWidget from "./CartWidget"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <NavLink to="/">
      <img src="/logo.png" alt="logo" />
    </NavLink>

      <nav>
        <NavLink to="/categoria/1"> Categoria 1 </NavLink>
        <NavLink to="/categoria/2"> Categoria 2 </NavLink>
        <NavLink to="/categoria/2"> Categoria 3 </NavLink>
        <CartWidget/>
      </nav>

    </header>
  )
}

export default Navbar
