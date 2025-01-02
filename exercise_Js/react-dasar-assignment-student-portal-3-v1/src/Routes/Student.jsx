import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [faculty, setFaculty] = useState("");

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const url = "http://localhost:3001/student";
        const response = await fetch(url);
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  function handleChange(event) {
    setFaculty(event.target.value);
  }

  const filteredStudents = students.filter(
    (student) => faculty === "" || student.faculty === faculty
  );

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <select
        data-testid="filter"
        name="faculty"
        id="select-student"
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">
          Fakultas Ilmu Sosial dan Politik
        </option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">
          Fakultas Teknologi Informasi dan Sains
        </option>
      </select>
      <div className="container-student">
        <table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents &&
              filteredStudents.map((student, index) => (
                <tr key={student.id} className="student-data-row">
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      to={`/student/${student.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {student.fullname}
                    </Link>
                  </td>
                  <td>{student.faculty}</td>
                  <td>{student.programStudy}</td>
                  <td>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => deleteStudent(student.id)}
                      data-testid={`delete-${student.id}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
