import { useState } from "react";
import { Link } from "react-router-dom";

function SectionEnrollmentComponent(props)
{
    const [seId, setSeId] = useState("");
    const [seHorario, setSeHorario] = useState("");
    const [seSemestre, setSeSemestre] = useState("");
    const [seFecha, setSeFecha] = useState("");
    const [seNumGrupo, setSeNumGrupo] = useState("");



    function searchSeOnDB()
    {
        //AQUI SE LLAMAN LOS ENDPOINTS PARA TRAER LA DATA Y GUARDARLO EN EL STATE.
    }


    return(
        <div>
          <h1>sectionEnrollmentData</h1>

          <div>
            <input type="text" placeholder="STU_ID" onChange={e => setSeId(e.target.value)}></input>
            <button onClick={searchSeOnDB}>Search</button>
          </div>

          <div>
            <h3>SE_HORARIO: {seHorario}</h3>
            <h3>SE_SEMESTRE: {seSemestre}</h3>
            <h3>SE_FECHA: {seFecha}</h3>
            <h3>SE_NUMGRUPO: {seNumGrupo}</h3>
            <h3>SE_ID: {seId}</h3>
          </div>

          <div>
            <button><Link to="/">ConsultantComponent</Link></button>
          </div>
        </div>
    );
}

export default SectionEnrollmentComponent;