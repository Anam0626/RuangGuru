const Table = (props) => {
    const {students} = props;
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
                            <tr key={student.id}>
                                <td>{index + 1}</td>
                                <td>{student.fullname}</td>
                                <td>{student.birthDate}</td>
                                <td>{student.gender}</td>
                                <td>{student.faculty}</td>
                                <td>{student.programStudy}</td>
                                <td className="delete">Delete</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Table;
