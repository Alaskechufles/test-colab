import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Receta() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function traerReceta() {
      try {
        const respuesta = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        const data = await respuesta.json();
        console.log(data.meals[0]);
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Algo salió mal:", error);
      }
    }
    traerReceta();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-6 shadow-md md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Receta #{id}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-800">
          {recipe.strMeal}
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              ID Meal
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {recipe.idMeal}
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Categoría
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {recipe.strCategory}
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Origen
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {recipe.strArea}
            </p>
          </article>
        </div>

        <article className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Instrucciones
          </h3>
          <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-700">
            {recipe.strInstructions}
          </p>
        </article>
      </section>
    </main>
  );
}

export default Receta;
