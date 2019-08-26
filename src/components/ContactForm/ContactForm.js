import React from 'react';
import "./ContactForm.scss"
import SideBar from "./SideBar";

const ContactForm = () => {
    return (
        <div className="container">
            <div className="contactPage">
                <SideBar/>
                <div className="contactForm">
                    <h1>Contact pagina</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis, magna nec efficitur tempor, dui eros fringilla tellus, vitae
                        consequat augue dolor at mauris. Nunc tempor rutrum dolor, sit amet scelerisque lacus feugiat non. Maecenas a tincidunt justo, ac
                        blandit arcu. Sed nec congue ex. Nullam pulvinar libero eu dolor congue commodo. Nam sed pharetra orci. Nunc ultrices sit amet magna
                        non vestibulum. Morbi ut dignissim quam. Etiam eget pellentesque nisi</p>
                    <form>
                        <div>
                            <label htmlFor="name">Naam</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="topic">Onderwerp</label>
                            <input type="text" name="topic" />
                        </div>
                        <div>
                            <label htmlFor="message">Bericht</label>
                            <textarea name="message" rows="10"/>
                        </div>
                        <input type="submit" value="Verstuur" className="blueButton" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;