const Planet = (props) => {
    return (
    <div>   
        
        <h1>{props.data.name}</h1>
        <h3>Rotation Period:</h3>
        <h5>{props.data.rotation_period}</h5>
        <h3>Orbital Period</h3>
        <h5>{props.data.orbital_period}</h5>
        <h3>Terrain:</h3>
        <h5>{props.data.terrain}</h5>
        <h3>Population:</h3>
        <h5>{props.data.population}</h5>
        <h3>Climate:</h3>
        <h5>{props.data.climate}</h5>
    </div>
    ) // TODO: replace this
};

export default Planet;
