import { useState } from 'react';
import './Citas.css'

function Citas({cita}){
    const [mostrarCita, setMostrarCita] = useState(true);
    const handleclick = () => {
      setMostrarCita(false);
      const citas = JSON.parse(localStorage.getItem("citas"));
      localStorage.setItem("citas", JSON.stringify(citas.filter(el => el.id != cita.id)));
    }

    return(
      mostrarCita ?
        <div className="cita">
        <span>Nombre del dueño: </span>
        <p className="NombreDueño">{cita.NombreDueño}</p><br/>
        <span>Nombre de la mascota: </span>
        <p className="NombreMascota">{cita.NombreMascota}</p><br/>
        <span>Fecha: </span>
        <p className="Fecha">{cita.Fecha}</p><br/>
        <span>Hora: </span>
        <p className="Hora">{cita.Hora}</p><br/>
        <span>Síntomas: </span>
        <p className="Sintomas">{cita.Sintomas}</p> <br/>
        <button className="botoneliminar" onClick={handleclick}>ELIMINAR ×</button>
      </div>
    : <></>
    ); 

}

export default Citas