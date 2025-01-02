import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <nav>
                <ul >
                    <li><Link to="/" data-testid="home-page">Student Portal</Link></li>
                    <li style={{ float: "right" }}><Link to="/student" className="text" data-testid="student-page">All Student</Link></li>
                    <li style={{ float: "right" }}><Link to="/add" className="text" data-testid="add-page">Add Student</Link></li>
                </ul>
            </nav>
        </>
    )
};

export default NavBar;
