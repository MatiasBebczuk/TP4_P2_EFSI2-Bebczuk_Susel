import './Formulario.css';

function Formulario({citas, setCitas}){
    const añadirCita = () => {
        let nuevo = {
            id: citas.length + 1,
            NombreDueño: document.querySelector("#NombreDueño").value,
            NombreMascota: document.querySelector("#NombreMascota").value,
            Fecha: document.querySelector("#Fecha").value,
            Hora: document.querySelector("#Hora").value,
            Sintomas: document.querySelector("#Sintomas").value,
        };

        // No guardar nada si hay un campo vacío (Es lo mismo que el required).
        for(const attr in nuevo){
            if(!nuevo[attr]) return;
        }

        let aux = [...citas, nuevo];
        setCitas(aux);
        localStorage.setItem("citas", JSON.stringify(aux));
    };

    return(<>
        <div className="form">
    <h2>Crear mi cita</h2>
            <label>Nombre del dueño:</label>
            <input id="NombreDueño" type="text" placeholder="Nombre dueño de la mascota"/>
            <label>Nombre de la mascota:</label>
            <input id="NombreMascota" type="text" placeholder="Nombre mascota"/>
            <label>Fecha:</label>
            <input id="Fecha" type="date"/>
            <label>Hora:</label>
            <input id="Hora" type="time"/>
            <label>Sintomas:</label>
            <textarea id="Sintomas"></textarea>
            <input type="submit" value="AGREGAR CITA" onClick={añadirCita} />
        </div>
    </>
    ); 

}

export default Formulario