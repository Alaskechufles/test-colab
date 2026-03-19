import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserInfo() {
  const { idUser } = useParams();
  const [usuarioData, setUsuarioData] = useState({});

  useEffect(() => {
    async function traerDatosDeUsuario() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${idUser}`,
        );
        setUsuarioData(data);
      } catch (error) {
        console.error("Algo salió mal:", error);
      }
    }
    traerDatosDeUsuario();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-md md:p-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Información del Usuario
        </h2>
        <p className="mt-2 text-slate-600">
          Bienvenido a la página de información del usuario. Aquí puedes
          encontrar detalles sobre el usuario seleccionado.
          <span className="ml-1 font-semibold text-slate-800">
            {usuarioData.name}
          </span>
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {usuarioData.email}
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Teléfono
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {usuarioData.phone}
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Website
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {usuarioData.website}
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Empresa
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {usuarioData.company?.name}
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Dirección
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {usuarioData.address?.street}, {usuarioData.address?.suite}
            </p>
            <p className="mt-1 text-sm text-slate-700">
              {usuarioData.address?.city} - {usuarioData.address?.zipcode}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default UserInfo;
