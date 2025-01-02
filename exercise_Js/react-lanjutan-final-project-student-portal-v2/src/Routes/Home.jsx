import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Heading } from "@chakra-ui/react";

const Home = () => {
    return (
        <div>
            <Container id="home" centerContent>
                <Heading as='h1' size='xl'>Student Portal</Heading>
                <Link to="/student">
                    <Button colorScheme="orange" variant="outline" data-testid="student-btn" id="button-home">All Student</Button>
                </Link>
            </Container>
        </div>
    )
};

export default Home;
