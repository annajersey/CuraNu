import React, {useState} from "react";
import cn from "classnames";
import "./ContactForm.scss";
import SideBar from "./SideBar";

const NAME = "name";
const EMAIL = "email";
const TOPIC = "topic";
const MESSAGE = "message";
const emailPattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const emptyErrorText = "This field is required";
const ContactForm = () => {
    const [fields, setFields] = useState({
        [NAME]: {value: "", error: "", isValid: false},
        [EMAIL]: {value: "", error: "", isValid: false},
        [TOPIC]: {value: "", error: "", isValid: false},
        [MESSAGE]: {value: "", error: "", isValid: false}
    });
    const [send, setSend] = useState(false);

    const onChangeField = (key, value) => {
        const error = (value === "") ? emptyErrorText : "";
        setFields({...fields, [key]: {value, error, isValid: error.length === 0}});
    };

    const validateEmail = (value) => {
        if (!value.match(emailPattern))
        {setFields({...fields, [EMAIL]: {value, error: "Please enter a valid email", isValid: false}});}
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkFields = {...fields};
        Object.keys(fields).map(key => {
            if (checkFields[key].value === "")
            {checkFields[key] = {...checkFields[key], error: emptyErrorText, isValid: true};}
        });

        setFields(checkFields);
        const isFormValid = (Object.values(fields).findIndex(field => !field.isValid) === -1);
        if (!isFormValid) {return;}
        setSend(true);
    };

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
                        <div className={cn("field", {invalid: !!fields[NAME].error.length})}>
                            <label htmlFor="name">Naam</label>
                            <div><input required type="text" name="name" value={fields[NAME].value}
                                onChange={(e) => onChangeField(NAME, e.target.value)}/>
                            <div className="error">{fields[NAME].error}</div>
                            </div>
                        </div>

                        <div className={cn("field", {invalid: !!fields[EMAIL].error.length})}>
                            <label htmlFor="email">Email</label>
                            <div><input required type="email" name="email" value={fields[EMAIL].value}
                                onBlur={e => validateEmail(e.target.value)}
                                onChange={e => onChangeField(EMAIL, e.target.value)}/>
                            <div className="error">{fields[EMAIL].error}</div>
                            </div>
                        </div>

                        <div className={cn("field", {invalid: !!fields[TOPIC].error.length})}>
                            <label htmlFor="topic">Onderwerp</label>
                            <div><input required type="text" name="topic" value={fields[TOPIC].value}
                                onChange={(e) => onChangeField(TOPIC, e.target.value)}
                            />
                            <div className="error">{fields[TOPIC].error}</div>
                            </div>
                        </div>

                        <div className={cn("field", "message", {invalid: !!fields[MESSAGE].error.length})}>
                            <label htmlFor="message">Bericht</label>
                            <div className="textArea"><textarea
                                name="message"
                                required
                                rows="10"
                                onChange={(e) => onChangeField(MESSAGE, e.target.value)}
                                value={fields[MESSAGE].value}/>
                            <div className="error">{fields[MESSAGE].error}</div>
                            </div>
                        </div>
                        <div className="submitBlock">
                            {send && <div className="success">Thank you! Your message has been sent successfully</div>}
                            <input type="submit"
                                value="Verstuur"
                                className="blueButton"
                                onClick={handleSubmit}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;