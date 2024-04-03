import { useState } from "react";
import { Link } from "react-router-dom";

function CourseGeneralComponent(props)
{
    const [cgId, setCgId] = useState("");
    const [cgDescription, setCgDescription] = useState("");
    const [cgTextbook, setCgTextbook] = useState("");



    function searchCgOnDB()
    {
        //AQUI SE LLAMAN LOS ENDPOINTS PARA TRAER LA DATA Y GUARDARLO EN EL STATE.
    }


    return(
        <div>
          <h1>courseGeneralData</h1>

          <div>
            <input type="text" placeholder="CG_ID" onChange={e => setCgId(e.target.value)}></input>
            <button onClick={searchCgOnDB}>Search</button>
          </div>

          <div>
            <h3>CG_DESCRIPTION: {cgDescription}</h3>
            <h3>CG_ID: {cgId}</h3>
            <h3>CG_TEXTBOOK: {cgTextbook}</h3>
          </div>

          <div>
            <button><Link to="/">ConsultantComponent</Link></button>
          </div>
        </div>
    );
}

export default CourseGeneralComponent;