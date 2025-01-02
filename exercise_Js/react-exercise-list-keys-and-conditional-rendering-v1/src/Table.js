function Table({ mentors }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>House</th>
          <th>Email</th>
        </tr>
      </thead>
      {mentors.length > 0 ? (
        <tbody>
            {mentors.map((mentor, index) => {
              let backgroundColor = "";
              index % 2 !== 0 ? 
              (backgroundColor = "white") : 
              (backgroundColor = "lightCyan");

              return(
                <tr style={{backgroundColor}} key={index}>
                <td>{mentor.name}</td>
                <td>{mentor.house}</td>
                <td>{mentor.email}</td>
              </tr>
              )
            })}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td>Data not available</td>
            <td>Data not available</td>
            <td>Data not available</td>
          </tr>
        </tbody>
      )}
    </table>
  );
}

export default Table;
