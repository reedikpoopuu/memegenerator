export default function Result (props) {
    return(
        <div className="result">
            <img className="result--picture" src={require("../images/cat.jpg")}/>
            <div className="result--text">
                <p className="result--textUpper">{props.upperText}</p>
                <p className="result--textLower">{props.lowerText}</p>
            </div>
        </div>
    )
}