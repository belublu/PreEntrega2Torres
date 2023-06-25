import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import "./App.css"



const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Productos"}/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
