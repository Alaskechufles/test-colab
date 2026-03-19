import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ListaRecetas from "./pages/ListaRecetas";
import Receta from "./pages/Receta";
import Users from "./pages/Users";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <>
      <nav className="border-b border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold tracking-tight text-slate-800"
          >
            State & Effect
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/listarecetas"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Lista de Recetas
            </Link>
            <Link
              to="/usuarios"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Lista de Usuarios
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listarecetas" element={<ListaRecetas />}></Route>
        <Route path="/receta/:id" element={<Receta />}></Route>
        <Route path="/usuarios" element={<Users />}></Route>
        <Route path="/usuario/:idUser" element={<UserInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
