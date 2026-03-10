import React, { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age) {
      alert("All fields are required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    const newStudent = {
      name,
      email,
      age,
    };

    console.log(newStudent);

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
