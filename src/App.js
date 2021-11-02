
import {useState} from "react"
import Navbar from "./components/NavBar"
import Itemcount from "./components/ItemCount"
import Itemlistcontainer from "./components/ItemListContainer"
import Itemdetailcontainer from "./components/ItemDetailContainer"

const App = () => {


  return (
    <>
      <Navbar/>
      <Itemcount stock="5" initial="1" />
      <Itemlistcontainer/>
      <Itemdetailcontainer/>

    </>
  )

}

export default App;
