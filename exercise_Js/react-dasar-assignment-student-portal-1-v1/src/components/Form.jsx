const Form = () => {
  return (
    <>
        <form id="form-student">
          <table>
            <tr>
              <td>
                <label htmlFor="input-name">Fullname</label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="text" id="input-name" />
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
                <input type="date" id="input-date" />
              </td>
              <td>
                <select id="input-gender">
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
                <select id="input-prody">
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
            <input type="submit" id="add-btn" value="Add student" />
          </table>
        </form>        
    </>
  );
};

export default Form;
