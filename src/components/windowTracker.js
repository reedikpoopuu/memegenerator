import React from "react"

export default function WindowTracker() {
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight})

    React.useEffect(() => {
        function watchSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight})
        }
        window.addEventListener("resize", watchSize)
        return function() {
            window.removeEventListener("resize", watchSize)
        }
    }, [])

    return(
        <div>
            <h1>Window width: {windowSize.width}</h1>
            <h1>Window height: {windowSize.height}</h1>
        </div>
    )
}