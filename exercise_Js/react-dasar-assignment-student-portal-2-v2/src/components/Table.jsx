const Table = ({ students, setNewData }) => {
    const deleteStudent = (id) => {
        try {
          fetch(`http://localhost:3001/student/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
       
          setNewData((prevStudents) =>
            prevStudents.filter((student) => student.id !== id)
          );
        } catch (error) {
          console.error(error.message);
        }
      };
    return (
        <>
            <table id="table-student">
                <thead> 
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Faculty</th>
                        <th>Program Study</th>
                        <th>Option</th>
        
                </thead>
                <tbody>
                    {students && students.map((student, index) => (
                            <tr key={student.id} className="student-data-row">
                                <td>{index + 1}</td>
                                <td>{student.fullname}</td>
                                <td>{student.birthDate}</td>
                                <td>{student.gender}</td>
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
                        )
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Table;
