import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        email: "",
        passwordVisible: "",
        passwordHidden: "",
        newsletter: true
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevState => {
            return {
                ...prevState, [name] : type === "checkbox" ? checked : value
            }
        })

    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.passwordVisible===formData.passwordHidden) {
            alert("Successfully signed up!");
            formData.newsletter && alert("Thanks for signing up to our newsletter!");
        } else {
            alert("Passwords do not match!")
        }

        
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail address"
            />
            <br />
            <input
            type="password"
            name="passwordVisible"
            value={formData.passwordVisible}
            onChange={handleChange}
            placeholder="Password"
            />
            <br />
            <input
            type="password"
            name="passwordHidden"
            value={formData.passwordHidden}
            onChange={handleChange}
            placeholder="Confirm password"
            />
            <br />
            <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            />
            <label htmlFor="newsletter">I want to join the newsletter</label>
            <br />
            <button>Sign up</button>
        </form>
    )
}