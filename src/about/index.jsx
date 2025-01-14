import React from "react";
import "./index.css";
import AboutImg from '../images/about.png';

const About = () => {
    return (
        <div className="row about-info wide" data-animate-block>

            <div className="column lg-4 md-12 pic-block">
                <img src={AboutImg} alt="" className="about-info__pic" />
            </div>

            <div className="column lg-8 md-12 about-detail">
                <div className="about-info__text" >
                    <h2 className="text-pretitle with-line" data-animate-el>
                        About
                    </h2>
                    <p className="attention-getter about-detail-text" data-animate-el>
                        I'm a developer with a passion for crafting pixel perfect user interface. My expertise lies in building responsive applications. 
                        With over <strong>6 years</strong> of hands-on experience, I specialize in creating pixel-perfect interfaces using <strong>React</strong> and <strong>React Native</strong>.
                       
                        <br></br>My journey has taken me through diverse technology landscapes –from lead the development of e-learning applications at Kaplan Inc. to the fast-paced world of mobile gaming at Mobile Premier League and to building innovative travel platforms at Traform Technologies. Each role has added new dimensions to my expertise in frontend and mobile development.
                        
                        <br></br>Now based in <strong>Dublin, Ireland</strong>, I pursued my Master's in Data Analytics at National College of Ireland, expanding my toolkit to create more intelligent, data-driven applications. 
                        When I'm not coding or diving into data, you'll find me watching anime or hiking.
                        <br></br><strong>Let's build something extraordinary together!</strong>
                    </p>
                    <a href="/Ajaykkumar Rajendran CV.pdf" download="Ajaykkumar-CV.pdf" className="btn btn--medium u-fullwidth" data-animate-el>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About;
