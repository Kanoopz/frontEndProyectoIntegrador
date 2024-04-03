import { useState } from "react";
import { Link } from "react-router-dom";

function StudentComponent(props)
{
    const [stuName, setStuName] = useState("");
    const [stuId, setStuId] = useState("");
    const [stuInfo, setStuInfo] = useState("");



    function searchStuOnDB()
    {
        //AQUI SE LLAMAN LOS ENDPOINTS PARA TRAER LA DATA Y GUARDARLO EN EL STATE.
    }


    return(
        <div>
          <h1>studentData</h1>

          <div>
            <input type="text" placeholder="STU_ID" onChange={e => setStuId(e.target.value)}></input>
            <button onClick={searchStuOnDB}>Search</button>
          </div>

          <div>
            <h3>STU_NAME: {stuName}</h3>
            <h3>STU_ID: {stuId}</h3>
            <h3>STU_INFO: {stuInfo}</h3>
          </div>

          <div>
            <button><Link to="/">ConsultantComponent</Link></button>
          </div>
        </div>
    );
}

export default StudentComponent;