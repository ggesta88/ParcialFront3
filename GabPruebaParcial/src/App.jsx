import Card from './Components/Card'
import Form from './Components/Form'
import { useState } from 'react'
import './App.css'

function App() {
  
  const [registro, setRegistro] = useState(false)

  let clientes =[
    {id:1, nombre: '', mascota: ''},
    //{id:2, nombre: '', mascota: ''},
  ]

  return (
    <>
      <h1>Bienvenido a la Veterinaria</h1>
      {clientes.map((cliente) => <Card key={cliente.id} cliente={cliente} setRegistro={setRegistro}/>)}
      {registro && <Form/>}
    </>
  )
}

export default App
