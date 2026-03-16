import { useEffect, useState } from 'react'

function App() {

  /* const [data,setData] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((datos)=>setData(datos))
  },[]) */

  const [productos,setProductos] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProductos(data));

  },[])

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
      {
        productos.map((producto)=>(
          <div key={producto.id}>
            <p>{producto.title}</p>
          </div>
        ))
      }
      
    </>
  )
}

export default App
