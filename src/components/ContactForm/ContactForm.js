import React, {useState} from 'react';
import "./ContactForm.scss"
import SideBar from "./SideBar";

const ContactForm = () => {
    const [fields, setFields] = useState({
        "name": "",
        "email": "",
        "topic": "",
        "message": "",
    });
    const [errors, setErrors] = useState({
        "name": "",
        "email": "",
        "topic": "",
        "message": "",
    })

    const changeField = (field, value) => {
        if (value==="") setErrors({...errors, [field]: "This field is required"})
        setFields({...fields, [field]: value})
    }

    return (
        <div className="container">
            <div className="contactPage">
                <SideBar/>
                <div className="contactForm">
                    <h1>Contact pagina</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis, magna nec efficitur
                        tempor, dui eros fringilla tellus, vitae
                        consequat augue dolor at mauris. Nunc tempor rutrum dolor, sit amet scelerisque lacus feugiat
                        non. Maecenas a tincidunt justo, ac
                        blandit arcu. Sed nec congue ex. Nullam pulvinar libero eu dolor congue commodo. Nam sed
                        pharetra orci. Nunc ultrices sit amet magna
                        non vestibulum. Morbi ut dignissim quam. Etiam eget pellentesque nisi</p>
                    <form>
                        <div className="field">
                            <label htmlFor="name">Naam</label>
                            <input type="text" name="name" value={fields.name}
                                   onChange={(e) => changeField("name", e.target.value)}/>
                        </div>
                        <div className="error">{errors.name}</div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={fields.email}
                                   onChange={(e) => changeField("email", e.target.value)}/>
                        </div>
                        <div className="error">{errors.email}</div>
                        <div className="field">
                            <label htmlFor="topic" value={fields.topic}
                                   onChange={(e) => changeField("topic", e.target.value)}>Onderwerp</label>
                            <input type="text" name="topic"/>
                        </div>
                        <div className="error">{errors.topic}</div>
                        <div className="field">
                            <label htmlFor="message">Bericht</label>
                            <textarea
                                name="message"
                                rows="10"
                                onChange={(e) => changeField("message", e.target.value)}
                                value={fields.message}/>
                        </div>
                        <div className="error">{errors.message}</div>
                        <input type="submit" value="Verstuur" className="blueButton"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;