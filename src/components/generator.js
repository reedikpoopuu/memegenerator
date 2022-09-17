import React from "react";
import memeData from "./memeData";
import Count from "./count";
import Contact from "./contact";
import Exercises from "./exercises";
import Header from "./header";
import Body from "./body";
import Boxer from "./boxer";

export default function Generator () {
    const [meme, setMeme] = React.useState({
        link: "https://i.imgflip.com/1bgw.jpg",
        topText: "TOP TEXT",
        bottomText: "BOTTOM TEXT"
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

    function changeTopText() {
        setMeme(prevState => {
            return {...prevState, topText: document.getElementById("topText").target.value.toUpperCase()}
        })
    }

    function changeBottomText() {
        setMeme(prevState => {
            return {...prevState, bottomText: document.getElementById("topText").target.value.toUpperCase()}
        })
    }

    const[user, setUser] = React.useState("Bob")

    return(
        <main className="generator">
            <div className="form">
                <input 
                type="text" 
                className="form--input"
                id="topText"
                onChange={changeTopText}
                placeholder="Top text"
                />
                <input 
                type="text" 
                className="form--input"
                onChange={changeBottomText}
                placeholder="Bottom text"
                />
                <button onClick={changeImage} className="form--button">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.link} className="meme--img"/>
                <p className="meme--textUpper">{meme.topText}</p>
                <p className="meme--textLower">{meme.bottomText}</p>
            </div>
            <Exercises />
            <Contact />
            <Count />
            <Header user={user}/>
            <Body user={user} />
            <Boxer />
        </main>
    )
}