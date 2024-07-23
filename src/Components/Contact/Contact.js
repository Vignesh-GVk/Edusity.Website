import React from "react";
import './Contact.css';
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1b5f109f-a01a-41cc-888e-53b7be827e8a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message  <img src={msg_icon} alt="" /> </h3>
                <p>
                    You can now view project in the browser.
                    Note that the development build is not
                    optimized. To create a production build,
                    use npm run build. webpack compiled successfully

                </p>
                <ul>
                    <li> <img src={mail_icon} alt="" /> vignesh@gmail.com</li>
                    <li>  <img src={phone_icon} alt="" /> +91 7448406704</li>
                    <li>  <img src={location_icon} alt="" /> poonamalli chennai-600056</li>
                </ul>
            </div>
            <div className="contact-col">


                <form onSubmit={onSubmit}>
                    <label> Your Name</label>
                    <input type="text" name='name'
                        placeholder="Enter Your name" required />
                    <label> Phone Number</label>
                    <input type="tel" name='phone'
                        placeholder="Enter Your mobile number" required />
                    <label> Write your message </label>
                    <textarea name="message" rows='6'
                        placeholder="enter your  message"></textarea>
                    <button type='submit' className='btn dark-btn'>
                        Submit Now <img src={white_arrow} alt="#" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact