import { useState,useEffect } from "react"

function Comida(){
    const [recetas, setRecetas] = useState([])
    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState("pork")

    useEffect(()=>{
        async function traerCategorias() {
          try {
            const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            const data = await respuesta.json()
            console.log(data.meals)
            setCategorias(data.meals)
          } catch (error) {
            console.error("Algo salió mal:", error )
          }
        }
        traerCategorias()
      },[]) 
    useEffect(()=>{
        async function traerRecetas() {
            try {
                const respuesta = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`)
                const data = await respuesta.json()
                setRecetas(data.meals)
                console.log(data.meals)
            } catch (error) {
                 console.error("Algo salió mal:", error )
            }
        }
        traerRecetas()
    },[categoria])


    return (
        <>
            <p>Comidas</p>
            <div className="flex flex-col">
            {categorias.map((categoria, index)=>(
                <button key={index} value={categoria.strCategory} onClick={(e)=>setCategoria(e.target.value)}>{categoria.strCategory}</button>
            ))}
            </div> 
            <div>
                {recetas.map(receta=>(
                    <p>{receta.strMeal}</p>
                ))}
            </div> 
        </>
    )
}

export default Comida