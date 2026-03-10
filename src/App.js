import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import { exportToExcel } from "./utils/exportExcel";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (confirmDelete) {
      const updatedStudents = students.filter((student, i) => i !== index);
      setStudents(updatedStudents);
    }
  };

  const editStudent = (index) => {
    const student = students[index];

    const name = prompt("Edit Name", student.name);
    const email = prompt("Edit Email", student.email);
    const age = prompt("Edit Age", student.age);

    if (name && email && age) {
      const updatedStudents = [...students];

      updatedStudents[index] = { name, email, age };

      setStudents(updatedStudents);
    }
  };
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading students...</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Students Management System</h1>

      <StudentForm addStudent={addStudent} />
      <button onClick={() => exportToExcel(students)}>Download Excel</button>

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default App;
