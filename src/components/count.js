import React from "react";
import Ticker from "./ticker";

export default function Count() {

    const [number, changeNumber] = React.useState(0);

    function add() {
        changeNumber(prevState => prevState + 1)
    }

    function subtract() {
        changeNumber(prevState => prevState - 1)
    }

    return(
        <div>
            <button onClick={subtract}>-</button>
            <Ticker number={number} />
            <button onClick={add}>+</button>
        </div>
    )
}