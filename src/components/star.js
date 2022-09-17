export default function Star(props) {
    return(
        <img 
        className="contact--star"  
        src={require(props.isFriend ? "../images/star-solid.png" : "../images/star-solid-black.png")} 
        onClick={props.handleClick}/>
    )
}