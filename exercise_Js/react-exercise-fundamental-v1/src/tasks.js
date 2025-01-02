import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  return <h1>{props.name}</h1>;
}

function Task2() {
  // TODO: answer here
  const [click, setClick] = useState("Klik tombol di bawah")
  return (
    <div>
      <h1>{click}</h1>  {/* TODO: replace this */}
        <button onClick={() => setClick("Tombol telah di-klik!")}>  {/* TODO: replace this */}
        
      </button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  // TODO: answer here
  return (
    <div>
      {students.map((student) => (
        <h2>{student.name} - {student.age}</h2>
      ))}
    </div>
  );
}

function Task3_1() {
  // TODO: answer here
  return (
    <div>
      {students.filter((student) => 
        student.dropout === false)
      .map((student) => (
        <h2>{student.name} - {student.age}</h2>
      ))}
    </div>
  );
}

function Task4() {
  // TODO: answer here
  const [remove, setRemove] = useState(false)
  return (
    <div>
      {!remove && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>} {/* TODO: replace this */}

      <button onClick={() => setRemove(true)}>Hapus</button>  {/* TODO: replace this */}
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
