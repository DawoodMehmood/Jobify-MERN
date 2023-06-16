import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>

<div className="contact-page">
      <h1>Contact Us</h1>
      <p>Feel free to contact us if you have any questions, feedback, or need assistance. We're here to help!</p>
    </div>
    <section className="mybody">
      <div className="mycontainer">
        <div className="mycontent">
          <div className="myleft-side">
            <div className="myaddress mydetails">
              <i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
              <div className="mytopic">Address</div>
              <div className="mytext-one">NUST, H12</div>
              <div className="mytext-two">ISLAMABAD, PAKISTAN</div>
            </div>
            <div className="myphone mydetails">
              <i><FontAwesomeIcon icon={faPhoneAlt} /></i>
              <div className="mytopic">Phone</div>
              <div className="mytext-one">+1234 5678 923</div>
              <div className="mytext-two">+92 324 49213</div>
            </div>
            <div className="myemail mydetails">
              <i><FontAwesomeIcon icon={faEnvelope} /></i>
              <div className="mytopic">Email</div>
              <div className="mytext-one">dawoodmehmood@gmail.com</div>
              <div className="mytext-two">dmehmood.bese20seecs@seecs.edu.pk</div>
            </div>
          </div>
          <div className="myright-side">
            <div className="mytopic-text" >
              Send us a message
            </div>
            <p>Feel free to contact an agent at Jobify regarding any queries.</p>
            <form action="#">
              <div className="myinput-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="myinput-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="myinput-box mymessage-box">
                <input type="text" placeholder="Enter your message here" />
              </div>
              <div className="mybutton">
                <input type="button"  value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Contact;
