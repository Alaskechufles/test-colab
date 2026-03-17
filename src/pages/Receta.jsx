import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function Receta(){
    const { id } = useParams()
    const [recipe,setRecipe] = useState({})

    useEffect(()=>{
            async function traerReceta() {
              try {
                const respuesta = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data = await respuesta.json()
                console.log(data.meals[0])
                setRecipe(data.meals[0])
              } catch (error) {
                console.error("Algo salió mal:", error )
              }
            }
            traerReceta()
    },[]) 

    return (
        <>
        <p>{id}</p>
        <p>{recipe.idMeal}</p>
        <p>{recipe.strMeal}</p>
        <p>{recipe.strCategory}</p>
        <p>{recipe.strArea}</p>
        <p>{recipe.strInstructions}</p>
        </>
    )
}
export default Receta