import React from "react";
import memeData from "./memeData";
/* import Count from "./count";
import Contact from "./contact";
import Exercises from "./exercises";
import Header from "./header";
import Body from "./body";
import Boxer from "./boxer";
import Joke from "./joke"; 
import Form from "./form"; */
import StarWars from "./starWars";

export default function Generator () {
    const [meme, setMeme] = React.useState({
        link: "https://i.imgflip.com/1bgw.jpg",
        topText: "",
        bottomText: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

    function changeImage () {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => {
            return {...prevState, link: url}
        });
    }

    function changeText(event) {
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...prevState, 
                [name]: value.toUpperCase()}
        })
    }

    // const[user, setUser] = React.useState("Bob")

    return(
        <main className="generator">
            <div className="form">
                <input 
                type="text" 
                className="form--input"
                name="topText"
                onChange={changeText}
                placeholder="Top text"
                value={meme.topText}
                />
                <input 
                type="text" 
                className="form--input"
                name="bottomText"
                onChange={changeText}
                placeholder="Bottom text"
                value={meme.bottomText}
                />
                <button onClick={changeImage} className="form--button">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.link} className="meme--img"/>
                <div className="meme--text">
                    <p className="meme--textUpper">{meme.topText}</p>
                    <p className="meme--textLower">{meme.bottomText}</p>
                </div>
            </div>
            {/* <Exercises />
            <Contact />
            <Count />
            <Header user={user}/>
            <Body user={user} />
            <Boxer />
            <Joke 
            setup="I got my daughter a fridge for a birthday."
            punchline="I can't wait to see her face light up when she opens it."/> 
            <Form /> */}
            <StarWars />
        </main>
    )
}