
import React from "react";
import './About.css'
import about_img from '../../Assets/about.png'
import play_icon from '../../Assets/play-icon.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="#" className="about-img"></img>
                <img src={play_icon} alt="#" className="play-icon" ></img>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing TomorroW's Leaders Today</h2>
                <p>
                    You can now view project in the browser.
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                    webpack compiled successfully
                </p>
                <p>
                    You can now view project in the browser.
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                    webpack compiled successfully
                </p>
                <p>
                    You can now view project in the browser.
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                    webpack compiled successfully
                </p>

            </div>
        </div>
    )
}
export default About