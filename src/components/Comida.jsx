import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Comida() {
  const [recetas, setRecetas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState("pork");

  useEffect(() => {
    async function traerCategorias() {
      try {
        const respuesta = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
        );
        const data = await respuesta.json();
        console.log(data.meals);
        setCategorias(data.meals);
      } catch (error) {
        console.error("Algo salió mal:", error);
      }
    }
    traerCategorias();
  }, []);

  useEffect(() => {
    async function traerRecetas() {
      try {
        const respuesta = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`,
        );
        const data = await respuesta.json();
        setRecetas(data.meals);
        console.log(data.meals);
      } catch (error) {
        console.error("Algo salió mal:", error);
      }
    }
    traerRecetas();
  }, [categoria]);

  return (
    <section className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-6 shadow-md md:p-8">
      <h2 className="text-3xl font-bold text-slate-800">Comidas</h2>
      <p className="mt-2 text-slate-600">
        Selecciona una categoría para ver recetas.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categorias.map((categoriaItem) => (
          <button
            key={categoriaItem.strCategory}
            type="button"
            value={categoriaItem.strCategory}
            onClick={(e) => setCategoria(e.target.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              categoria === categoriaItem.strCategory
                ? "border-slate-800 bg-slate-800 text-white"
                : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {categoriaItem.strCategory}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recetas.map((receta) => (
          <Link to={`/receta/${receta.idMeal}`}>
            <article
              key={receta.idMeal}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-sm font-medium text-slate-800">
                {receta.strMeal}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Comida;
