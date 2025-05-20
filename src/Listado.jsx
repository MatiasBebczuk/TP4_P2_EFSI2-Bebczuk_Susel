import Citas from "./Citas.jsx"
import './Listado.css'

function Listado({citas}){
    return(
      <div className="Listado">
        <h2 style={{width: "250%", textAlign: "left"}}>Administra tus citas</h2>
        {citas.map((cita, i) => <Citas key={i} cita={cita}></Citas>)}
      </div>
    ); 

}

export default Listado