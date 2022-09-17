export default function Heading () {
    return(
        <header className="heading">
            <div className="heading--logo">
                <img className="heading--img" src={require("../images/meteor-solid.png")} alt="logo-img"/>
                <p className="heading--title">Meme Generator</p>
            </div>
            <p className="heading--description">React Course - Project 3</p>
        </header>
    )
}