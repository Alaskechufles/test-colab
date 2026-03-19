import axios from "axios";
import { useEffect, useState } from "react";

function AxiosFetch(params) {
  /* const [data,setData] = useState([])
    
      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((datos)=>setData(datos))
      },[]) */

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  /* useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProductos(data));
      },[]) */

  /* useEffect(()=>{
        async function traerProductos() {
          try {
            const respuesta = await fetch('https://fakestoreapi.com/products')
            const data = await respuesta.json()
            setProductos(data)
          } catch (error) {
            console.error("Algo salió mal:", error )
          }
        }
        traerProductos()
      },[]) */

  useEffect(() => {
    async function obtenerProductos() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProductos(data);
      } catch (error) {
        console.error("Algo salió mal:", error);
        setError("Error al cargar datos");
      }
    }
    obtenerProductos();
  }, []);

  return (
    <>
      <h1>Welcome to Vite + React</h1>
      {console.log(productos)}
      {/* {
        data.map((user)=>(
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      } */}
      {productos.map((producto) => (
        <div key={producto.id}>
          <p>{producto.title}</p>
        </div>
      ))}
      <p className=" text-red-500 text-5xl">{error}</p>
    </>
  );
}

export default AxiosFetch;
