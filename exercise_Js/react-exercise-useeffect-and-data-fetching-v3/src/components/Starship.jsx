const Starship = (props) => {
    return (
    <div>
        <h1>{props.data.name}</h1>
        <h3>Model:</h3>
        <h5>{props.data.model}</h5>
        <h3>Manufacture:</h3>
        <h5>{props.data.manufacture}</h5>
        <h3>Crew:</h3>
        <h5>{props.data.crew}</h5>
        <h3>Passengers:</h3>
        <h5>{props.data.passengers}</h5>
        <h3>Cargo Capacity:</h3>
        <h5>{props.data.cargo_capacity}</h5>
        <h3>Starship Class:</h3>
        <h5>{props.data.starship_class}</h5>

    </div>
    ) // TODO: replace this
};

export default Starship;
