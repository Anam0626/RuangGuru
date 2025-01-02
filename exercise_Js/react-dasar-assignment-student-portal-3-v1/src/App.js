import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import EditStudent from "./Routes/EditStudent";
import AddStudent from "./Routes/AddStudent";
import NotFound from "./Routes/NotFound";
import "./css/App.css";
import NavBar from "./components/Navbar";

const App = () => {
    const location = useLocation(); 

    return (
        <>
            {location.pathname !== "/" && <NavBar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="add" element={<AddStudent />} />
                <Route path="student">
                    <Route index element={<Student />} />
                    <Route path=":id" element={<EditStudent />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
