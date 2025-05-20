import './Citas.css'

function Citas({cita}){
    return(
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
        <p className="Sintomas">{cita.Sintomas}</p> 
      </div>
    ); 

}

export default Citas