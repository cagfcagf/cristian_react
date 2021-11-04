
import {useState} from "react"
import Navbar from "./components/NavBar"
import Itemcount from "./components/ItemCount"
import Itemlistcontainer from "./components/ItemListContainer"
import Itemdetailcontainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route } from "react-router-dom"

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Route path="/" component={Itemlistcontainer} exact />
        <Route path="/categoria/:id" component={Itemlistcontainer}/>
        <Route path="/item/:id" component={Itemdetailcontainer}/>




      </BrowserRouter>
    </>
  )

}

export default App;
