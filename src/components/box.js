import React from "react";

export default function Box(props) {
    const styles = {background: props.on ? "red" : "none"}
    return(
        <div 
        className="boxer--box" 
        style={styles}
        onClick={props.toggle}
        />
    )
}