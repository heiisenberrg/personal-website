import React from "react";
import "./index.css";

const Contact = () => {
    return (
        <section id="contact" className="s-contact target-section">
            <div className="row contact-top">
                <div className="column lg-12">
                    <h2 className="text-pretitle with-line">
                        Get In Touch
                    </h2>

                    <p className="h1">
                        I love to hear from you.
                        Whether you have a question or just
                        want to chat about Javascript — shoot me a message.
                    </p>
                </div>
            </div>

            <div className="row contact-bottom">
                <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
                    <h3 className="text-pretitle">Reach me at</h3>
                    <p className="contact-links">
                        <a href="mailto:ajaykkumar.rajen@gmail.com" className="mailtoui">ajaykkumar.rajen@gmail.com</a> <br></br>
                        <a href="tel:+353892560059">+353 89256 0059</a>
                    </p>
                </div>
                <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
                    <h3 className="text-pretitle">Social</h3>
                    <ul className="contact-social">
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/heiisenberrg">Github</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ajaykkumar-rajendran/">LinkedIN</a></li>
                    </ul>
                </div>
                <div className="column lg-4 md-12 contact-block">
                    <a href="mailto:ajaykkumar.rajen@gmail.com" className="mailtoui btn btn--medium u-fullwidth contact-btn">Say Hello!</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;
