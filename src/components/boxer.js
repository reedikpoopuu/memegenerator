import React from "react";
import boxes from "./boxes";
import Box from "./box"

export default function Boxer(props) {
    const [squares, setSquares] = React.useState(boxes);
    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map(square => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square => (
    <Box
    key={square.id}
    on={square.on}
    toggle={() => toggle(square.id)}
    />
    ))

    return(
        <div>
            <h1>{squareElements}</h1>
        </div>
    )
}