import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="container-home">
                <h1>Student Portal</h1>
                <Link to="/student"><button data-testid="student-btn" id="button-home">All Student</button></Link>
            </div>
        </div>
    )
};

export default Home;
