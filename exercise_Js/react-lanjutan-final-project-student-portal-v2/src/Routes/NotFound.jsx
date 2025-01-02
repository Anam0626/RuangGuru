import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react"


const NotFound = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <>
            <div className="not-found">
                <h1>404 | Not Found</h1>
                <Button data-testid="back" id='back-button' onClick={handleBack}>Take Me Back</Button>
            </div>
        </>
    );
};

export default NotFound;
