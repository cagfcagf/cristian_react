import CartWidget from "./CartWidget"


const Navbar = () => {
  return (
    <header>
      <h1>GuiltyBox</h1>
      <nav>
        <a href=''>¿Quienes somos?</a>
        <a href=''> Politicas de devoluciones</a>
        <a href=''> Comprar</a>
        <CartWidget/>
      </nav>

    </header>
  )
}

export default Navbar
