import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"

import ConsultComponent from './Components/ConsultComponent';
import ProfessorComponent from './Components/ProfessorComponent';
import StudentComponent from './Components/StudentComponent';
import CourseGeneralComponent from './Components/CourseGeneralComponent';
import SectionEnrollmentComponent from './Components/SectionEnrollmentComponent';



function App() {
  return (
    <div className="App">
      <header>
        <h1>mainComponent</h1>
      </header>

      <body>
        <Routes>
          <Route path="/" element={ <ConsultComponent/> } />
          <Route path="ProfessorComponent" element={ <ProfessorComponent/> } />
          <Route path="StudentComponent" element={ <StudentComponent/> } />
          <Route path="CourseGeneralComponent" element={ <CourseGeneralComponent/> } />
          <Route path="SectionEnrollmentComponent" element={ <SectionEnrollmentComponent/> } />
        </Routes>
      </body>
    </div>
  );
}

export default App;
