import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Select, Input } from "@chakra-ui/react";

const EditStudent = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDetail = async () => {
            try {
                const url = `http://localhost:3001/student/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setDetail(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
    
        loadDetail();
    }, [id]);
    
    if (loading) {
        return <p>Loading ...</p>;
    }
        

    const defaultDetail = {
        fullname: '',
        address: '',
        phoneNumber: '',
        birthDate: '',
        gender: '',
        faculty: '',
        programStudy: ''
    };

    const currentDetail = detail || defaultDetail;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetail((prevData) => {
            let faculty = prevData.faculty;

            if (name === "programStudy") {
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
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const studentData = {
            fullname: currentDetail.fullname,
            profilePicture: currentDetail.profilePicture,
            address: currentDetail.address,
            phoneNumber: currentDetail.phoneNumber,
            birthDate: currentDetail.birthDate,
            gender: currentDetail.gender,
            faculty: currentDetail.faculty,
            programStudy: currentDetail.programStudy
        };

        try {
            const response = await fetch(`http://localhost:3001/student/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(studentData),
            });
            navigate("/student");
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    return (
        <>
            <div className="container-editStudent">
                <img src={currentDetail.profilePicture || 'default-image-url.jpg'} alt="Profile Picture" />
                <form id="form-student" onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="input-name">Fullname</label></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <input
                                        type="text"
                                        id="input-name"
                                        data-testid="name"
                                        name="fullname"
                                        onChange={handleChange}
                                        value={currentDetail.fullname}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="address">Address</label></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        data-testid="address"
                                        onChange={handleChange}
                                        value={currentDetail.address}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="phoneNumber">Phone Number</label></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        data-testid="phoneNumber"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                        value={currentDetail.phoneNumber}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="input-date">Birth Date</label></td>
                                <td><label htmlFor="input-gender">Gender</label></td>
                            </tr>
                            <tr>
                                <td>
                                    <Input
                                        type="date"
                                        id="input-date"
                                        data-testid="date"
                                        name="birthDate"
                                        onChange={handleChange}
                                        value={currentDetail.birthDate}
                                        required
                                    />
                                </td>
                                <td>
                                    <Select
                                        id="input-gender"
                                        data-testid="gender"
                                        name="gender"
                                        onChange={handleChange}
                                        value={currentDetail.gender}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <label htmlFor="input-prody">Program Study</label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <select
                                        id="input-prody"
                                        data-testid="prody"
                                        name="programStudy"
                                        onChange={handleChange}
                                        value={currentDetail.programStudy}
                                    >
                                        <option value="">Select Program Study</option>
                                        <option value="Ekonomi">Ekonomi</option>
                                        <option value="Manajemen">Manajemen</option>
                                        <option value="Akuntansi">Akuntansi</option>
                                        <option value="Administrasi Publik">Administrasi Publik</option>
                                        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                                        <option value="Hubungan Internasional">Hubungan Internasional</option>
                                        <option value="Teknik Sipil">Teknik Sipil</option>
                                        <option value="Arsitektur">Arsitektur</option>
                                        <option value="Matematika">Matematika</option>
                                        <option value="Fisika">Fisika</option>
                                        <option value="Informatika">Informatika</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <Button type="submit" colorScheme="blue" variant="outline" id="add-btn" value="Edit student" data-testid="edit-btn">Edit Student</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};

export default EditStudent;
