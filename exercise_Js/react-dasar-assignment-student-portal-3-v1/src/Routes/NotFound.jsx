import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <>
            <div className="not-found">
                <h1>404 | Not Found</h1>
                <button data-testid="back" id='back-button' onClick={handleBack}>Take Me Back</button>
            </div>
        </>
    );
};

export default NotFound;
