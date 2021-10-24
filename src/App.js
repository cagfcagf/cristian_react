
import {useState} from "react"
import Navbar from "./components/NavBar"
import Itemcount from "./components/ItemCount"
import Itemlistcontainer from "./components/ItemListContainer"


const App = () => {


  return (
    <>
      <Navbar/>
      <Itemcount stock="5" initial="1" />
      <Itemlistcontainer/>

    </>
  )

}

export default App;
