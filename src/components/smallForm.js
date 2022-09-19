import React from "react";

export default function SmallForm() {
    const [personData, setPersonData] = React.useState({
        firstName: "",
        lastName: "",
        eMail: "",
        description: "",
        isSerious: true,
        employment: "",
        favColor: ""
        });

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setPersonData(prevState => {
            return {
                ...prevState, 
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return(
        <form>
            <input 
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={personData.firstName}
            />
            <input 
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={personData.lastName}
            />
            <p>{personData.firstName} {personData.lastName}</p>
            <input 
            type="email"
            placeholder="E-mail address"
            onChange={handleChange}
            name="eMail"
            value={personData.eMail}
            />
            <p>{personData.eMail}</p>
            <textarea 
            placeholder="Add your idea here"
            onChange={handleChange}
            name="description"
            value={personData.description}
            />
            <input 
            type="checkbox"
            id="isSerious"
            onChange={handleChange}
            name="isSerious"
            checked={personData.isSerious}
            />
            <label htmlFor="isSerious" style={{fontSize: "12px"}}>Are you serious?</label>

            <fieldset>
                <legend>Current employment status</legend>

                <input 
                type="radio" 
                name="employment" 
                id="unemployed" 
                value="unemployed" 
                checked={personData.employment === "unemployed"} 
                onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input 
                type="radio" 
                name="employment" 
                id="part-time" 
                value="part-time" 
                checked={personData.employment === "part-time"} 
                onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input 
                type="radio" 
                name="employment" 
                id="full-time" 
                value="full-time" 
                checked={personData.employment === "full-time"} 
                onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={personData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
        </form>
    )
}