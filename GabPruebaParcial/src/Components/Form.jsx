import { useState } from "react";

const Form = () =>{
    const [ClienteVet, setClienteVet] = useState({
        nombre: '',
        mascota:''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if (ClienteVet.nombre.length > 3 && !ClienteVet.nombre.startsWith(' ') &&ClienteVet.mascota.length > 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(ClienteVet)

    return (
        <div>
            <label>Nombre del cliente </label>
            <input type = "text" value = {ClienteVet.nombre} onChange = {(event) => setClienteVet({...ClienteVet, nombre: event.target.value})}/>
            <br></br>
            <label>Nombre de la mascota </label>
            <input type = "text" value = {ClienteVet.mascota} onChange={(event) => setClienteVet({...ClienteVet, mascota: event.target.value})}/>
            <br></br><button onClick={handleSubmit}>Enviar</button>
            {show && <h3>REGISTRADO CORRECTAMENTE !!!</h3>}
        {error && <h4 style={{color: 'red'}}>Por favor llene todos los campos</h4>}
        </div>
    )
}
export default Form