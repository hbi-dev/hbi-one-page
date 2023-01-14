import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

function cancel() {
  console.log("cancel");
}

function handleSubmit() {
  console.log("submit");
}

export class Contact extends Component {
  render() {
    return (
      <>
        <section>
          <div className="contact-card ctop">
            <div className="infos">
              <div className="adresse">
                <p>
                  <FontAwesomeIcon icon={faHome} className="logo" />
                  104, rue Louise Michel - 59290 Wasquehal
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="logo" />
                  Tel: 06-87-79-27-79
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="logo" />
                  g.besoin.daide@gmail.com
                </p>
              </div>
              <div className="carte">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5055.683648758932!2d3.142241!3d50.685761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329059a9e7e41%3A0x1394c3a0eb2de385!2sH.B.I!5e0!3m2!1sfr!2sfr!4v1673469385160!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="formulaire">
              <ContactForm />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
//
//contact : https://w3collective.com/react-contact-form/
