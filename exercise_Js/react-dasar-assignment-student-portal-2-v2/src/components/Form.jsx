import { useState } from "react";

const Form = (props) => {
    // TODO: answer here
    const [studentForm, setStudentForm] = useState({
        fullname: "",
        birthDate: "",
        gender: "",
        faculty: "",
        programStudy: ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setStudentForm((prevData) => {
            let faculty = prevData.faculty;
            if(name === "programStudy"){
                if (value === "Ekonomi" || value === "Manajemen" || value === "Akuntansi") {
                    faculty = "Fakultas Ekonomi";
                } else if (value === "Administrasi Publik" || value === "Administrasi Bisnis" || value === "Hubungan Internasional") {
                    faculty = "Fakultas Ilmu Sosial dan Politik";
                } else if (value === "Teknik Sipil" || value === "Arsitektur") {
                    faculty = "Fakultas Teknik";
                } else if (value === "Matematika" || value === "Fisika" || value === "Informatika") {
                    faculty = "Fakultas Teknologi Informasi dan Sains";
                }
            }

            return {
                ...prevData,
                [name]: value,
                faculty: faculty
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        const studentData = {
          fullname: studentForm.fullname,
          birthDate: studentForm.birthDate,
          gender: studentForm.gender,
          faculty: studentForm.faculty,
          programStudy: studentForm.programStudy
        };
    
        fetch("http://localhost:3001/student", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("Success:", data);
    
            props.setNewData(data);
            setStudentForm({
                fullname: "",
                birthDate: "",
                gender: "",
                faculty: "",
                programStudy: ""
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

    return (
        <>
        <form id="form-student" onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="input-name">Fullname</label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="text" id="input-name" data-testid="name" name="fullname" onChange={handleChange}
                    value={studentForm.fullname} required/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="input-date">Birth Date</label>
              </td>
              <td>
                <label htmlFor="input-gender">Gender</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="date" id="input-date" data-testid="date" name="birthDate" onChange={handleChange} value={studentForm.birthDate} required/>
              </td>
              <td>
                <select id="input-gender" data-testid="gender" name="gender" onChange={handleChange} value={studentForm.gender} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <label htmlFor="input-prody">Program Study</label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <select id="input-prody" data-testid="prody" name="programStudy" onChange={handleChange} value={studentForm.programStudy}>
                  <option value="">Select Program Study</option>
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Manajemen">Manajemen</option>
                  <option value="Akuntansi">Akuntansi</option>
                  <option value="Administrasi Publik">
                    Administrasi Publik
                  </option>
                  <option value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </option>
                  <option value="Hubungan Internasional">
                    Hubungan Internasional
                  </option>
                  <option value="Teknik Sipil">Teknik Sipil</option>
                  <option value="Arsitektur">Arsitektur</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Informatika">Informatika</option>
                </select>
              </td>
            </tr>
            <input type="submit" id="add-btn" value="Add student" data-testid="submit"/>
          </table>
        </form>
        </>
    );
};

export default Form;
