import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import ListaRecetas from "./pages/ListaRecetas"
import Receta from "./pages/Receta"

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/listarecetas" element={<ListaRecetas/>}></Route>
      <Route path="/receta/:id" element={<Receta/>}></Route>
     </Routes>
    </>
  )
}

export default App
