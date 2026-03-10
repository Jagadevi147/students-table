import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Students Management System</h1>

      <StudentForm addStudent={addStudent} />

      <StudentTable students={students} />
    </div>
  );
}

export default App;
