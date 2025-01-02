import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import "./css/App.css";

const App = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newData, setNewData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true); 
        const res = await fetch("http://localhost:3001/student");
        const data = await res.json();
        setStudent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchStudents();
  }, [newData]);

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <p>Loading ...</p>; 
  }

  return (
    <div className="container">
      <h3>Student Portal</h3>
      <Form setNewData={setNewData} />
      <hr />
      <Table students={student} setNewData={setStudent} />
    </div>
  );
};

export default App;
