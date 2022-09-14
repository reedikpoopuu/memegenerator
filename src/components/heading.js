export default function Heading () {
    return(
        <div className="heading">
            <div className="heading--logo">
                <img className="heading--img" src={require("../images/meteor-solid.png")} alt="logo-img"/>
                <h1 className="heading--title">Meme Generator</h1>
            </div>
            <p className="heading--description">React Course - Project 3</p>
        </div>
    )
}