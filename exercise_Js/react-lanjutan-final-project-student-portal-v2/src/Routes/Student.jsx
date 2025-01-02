import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Select,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
  } from "@chakra-ui/react";

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
      <Select 
       data-testid="filter" name="faculty" id="select-student" onChange={handleChange}>
            <option value="">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
            Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
            </option>
       </Select>
        
      <div className="container-student">
      <TableContainer>
      <Table id="table-student">
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Full Name</Th>
            <Th>Faculty</Th>
            <Th>Program Study</Th>
            <Th>Option</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredStudents &&
            filteredStudents.map((student, index) => (
              <Tr key={student.id} className="student-data-row">
                <Td>{index + 1}</Td>
                <Td>
                  <Link
                    to={`/student/${student.id}`}
                    textDecoration="none"
                    color="inherit"
                  >
                    {student.fullname}
                  </Link>
                </Td>
                <Td>{student.faculty}</Td>
                <Td>{student.programStudy}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => deleteStudent(student.id)}
                    data-testid={`delete-${student.id}`}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
      </div>
    </>
  );
};

export default Student;
