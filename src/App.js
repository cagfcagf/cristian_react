
import {useState} from "react"
import Navbar from "./components/NavBar"
import Itemcount from "./components/ItemCount"
import Itemlistcontainer from "./components/ItemListContainer"
import Itemdetailcontainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route } from "react-router-dom"
import Itemlist from "./components/ItemList"
import Cart from "./components/Cart"
import CustomComponent from "./components/CartContext"

const App = () => {


  return (
    <>
      <BrowserRouter>
        <CustomComponent>
            <Navbar/>
            <Route path="/" component={Itemlistcontainer} exact />
            <Route path="/categoria/:id" component={Itemlistcontainer}/>
            <Route path="/item/:id" component={Itemdetailcontainer}/>
            <Route path="/cart" component={Cart}/>
        </CustomComponent>
      </BrowserRouter>


    </>
  )

}

export default App;
