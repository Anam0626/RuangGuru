const People = (props) => {
    return (
    <div>
        <h1>{props.data.name}</h1>
        <h3>Gender:</h3>
        <h5>{props.data.gender}</h5>
        <h3>Birth Year:</h3>
        <h5>{props.data.birth_year}</h5>
        <h3>Mass:</h3>
        <h5>{props.data.mass}</h5>
        <h3>Height:</h3>
        <h5>{props.data.height}</h5>
        <h3>Eye Color:</h3>
        <h5>{props.data.eye_color}</h5>
    </div>
    ) 
};

export default People;
