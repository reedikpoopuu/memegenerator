import React from "react";
import Star from "./star";

export default function Contact() {
    const [contact, setContact] = React.useState({
        firstName: "Jonathan",
        lastName: "Calibrieri",
        phone: "+372 5070 3002",
        email: "j.calibrieri@jc.org",
        isFavorite: false
    })
    function toggleFavorite() {
        setContact(prevState => {
            return {...prevState, isFavorite: !prevState.isFavorite}})
    }

    return(
        <div>
                <Star isFriend={contact.isFavorite} handleClick={toggleFavorite}/>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
        </div>
    )
}