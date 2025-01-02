import React from "react";
import { Link as RouterLink } from "react-router-dom"; 
import { Link } from "@chakra-ui/react"; 

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link as={RouterLink} to="/" color="white" data-testid="home-page">
            Student Portal
          </Link>
        </li>
        <li style={{ float: "right" }}>
          <Link as={RouterLink} to="/student" color="white" className="text" data-testid="student-page">
            All Student
          </Link>
        </li>
        <li style={{ float: "right" }}>
          <Link as={RouterLink} to="/add" color="white" className="text" data-testid="add-page">
            Add Student
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
