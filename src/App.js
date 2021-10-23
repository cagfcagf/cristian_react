
import {useState} from "react"
import Navbar from "./components/NavBar"
import Itemlist from  "./components/ItemListContainer"
import Itemcount from "./components/ItemCount"


const App = () => {


  return (
    <>
      <Navbar/>
      <Itemcount stock="5" initial="1" />
    </>
  )

}

export default App;
