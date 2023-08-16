import React from 'react'

const Card = ({cliente, setRegistro}) =>{

    return (
        <div>
            <h3>{cliente.nombre}</h3>
            <h3>{cliente.mascota}</h3>
            <button onClick={() => setRegistro(true)}>Registrar cliente</button>
        </div>
    )
}

export default Card