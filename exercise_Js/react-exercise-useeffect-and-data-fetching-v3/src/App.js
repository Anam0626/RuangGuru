import { useEffect, useState } from "react";
import People from "./components/People";
import Planet from "./components/Planet";
import Starship from "./components/Starship";
const App = () => {
    const [request, setRequest] = useState("people")
    const [results, setResult] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `https://swapi.py4e.com/api/${request}`;

        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setResult(json.results);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [request])  

    return (
    <div>
        <select onChange={(e) => setRequest(e.target.value)}>
            <option value={"people"}>People</option>
            <option value={"planets"}>Planets</option>
            <option value={"starships"}>Starships</option>
        </select>
        {loading ? (
            <h2>Loading...</h2>
        ) : (
            <div>
                {results.map((result, index) => {
                switch (request) {
                    case "planets":
                        return <Planet data={result} key={index}/>;
                    case "starships":
                        return <Starship data={result} key={index}/>;
                    default:
                        return <People data={result} key={index}/>;
                }
            })}
            </div>
        )} 
    </div>
    ); 
};

export default App;
