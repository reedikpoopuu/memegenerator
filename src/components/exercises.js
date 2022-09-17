import React from "react";

export default function Exercises() {
    const[isGoingOut, setIsGoingOut] = React.useState(true)
    function handleAnswer() {
        setIsGoingOut(prevState => prevState ? false : true)        
    }

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);
    function addItem() {
        setThingsArray(prevState => [...prevState, `Thing ${prevState.length + 1}`])
    }
    const things = thingsArray.map(thing => <p>{thing}</p>)

    return(
        <div>
            <p onClick={handleAnswer}>{isGoingOut ? "Yes" : "No"}</p>
            <div onClick={addItem}>{things}</div>
        </div>
    )
}