import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);

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

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Students Management System</h1>

      <StudentForm addStudent={addStudent} />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default App;
