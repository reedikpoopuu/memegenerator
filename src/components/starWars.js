import React from "react";

export default function StarWars() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    /* Cannot have the fetch on this top level since then it will 
    create an infinite loop
     fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data)) */

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count])

    function handleNext() {
        setCount(prevState => prevState + 1)
    }

    function handlePrev() {
        setCount(prevState => prevState - 1)
    }

    return(
        <div>
            <h1>The count is {count}</h1>
            {count > 1 && <button onClick={handlePrev}>Get next chatacter</button>}
            <button onClick={handleNext}>Get next chatacter</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}