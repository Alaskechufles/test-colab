import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function traerUsuarios() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsuarios(data);
      } catch (error) {
        console.log("Algo salió mal:", error);
      }
    }
    traerUsuarios();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-md md:p-8">
        <h2 className="text-3xl font-bold text-slate-800">Usuarios</h2>
        <p className="mt-2 text-slate-600">
          Selecciona un usuario para ver su información.
        </p>

        <div className="mt-8 space-y-3">
          {usuarios.map((usuario) => (
            <Link
              key={usuario.id}
              to={`/usuario/${usuario.id}`}
              className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-slate-100"
            >
              <p className="text-sm font-medium text-slate-800">
                <span className="mr-2 rounded-md bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">
                  #{usuario.id}
                </span>
                {usuario.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
export default Users;
