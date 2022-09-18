import React from "react";
import Messages from "./messages"

export default function Joke(props) {
    const [isShown, toggleIsShown] = React.useState(false);
    function handleClick() {
        toggleIsShown(prevState => prevState ? false : true)
    }

    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={handleClick}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
            <Messages />
        </div>
    )
}