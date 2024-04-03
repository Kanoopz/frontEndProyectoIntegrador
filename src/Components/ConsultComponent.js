import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import ProfessorComponent from "./ProfessorComponent";
import StudentComponent from "./StudentComponent";
import SectionEnrollmentComponent from "./SectionEnrollmentComponent";
import CourseGeneralComponent from "./CourseGeneralComponent";

function ConsultComponent(props)
{
    return(
        <div>
          <h2>Consult:</h2>

          <div>
            <button><Link to="ProfessorComponent">ProfessorComponent</Link></button>
            <button><Link to="StudentComponent">StudentComponent</Link></button>
            <button><Link to="SectionEnrollmentComponent">SectionEnrollmentComponent</Link></button>
            <button><Link to="CourseGeneralComponent">CourseGeneralComponent</Link></button>
          </div>
        </div>
    );
}

export default ConsultComponent;