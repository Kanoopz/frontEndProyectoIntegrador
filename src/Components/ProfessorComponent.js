import { useState } from "react";
import { Link } from "react-router-dom";

function ProfessorComponent(props)
{
    const [profName, setProfName] = useState("");
    const [profId, setProfId] = useState("");
    const [profInfo, setProfInfo] = useState("");



    function searchProfOnDB()
    {
        //AQUI SE LLAMAN LOS ENDPOINTS PARA TRAER LA DATA Y GUARDARLO EN EL STATE.
        //SE USA EL STATE DE profId.
    }


    return(
        <div>
          <h1>professorData</h1>

          <div>
            <input type="text" placeholder="PROF_ID" onChange={e => setProfId(e.target.value)}></input>
            <button onClick={searchProfOnDB}>Search</button>
          </div>

          <div>
            <h3>PROF_NAME: {profName}</h3>
            <h3>PROF_ID: {profId}</h3>
            <h3>PORF_INFO: {profInfo}</h3>
          </div>

          <div>
            <button><Link to="/">ConsultantComponent</Link></button>
          </div>
        </div>
    );
}

export default ProfessorComponent;