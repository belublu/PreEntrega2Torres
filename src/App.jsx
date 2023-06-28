import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"



const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h2>Sitio en construcción. Vuelva pronto.</h2>}/>
      </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting = {"Productos"}/>
      <ItemDetailContainer/> */}
    </>
  )
}

export default App
