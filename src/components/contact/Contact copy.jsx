import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom </label>
                <input type="text" name="name" id="name" />
                <label htmlFor="mail">Email</label>
                <input type="email" name="mail" id="mail" />
                <label htmlFor="tel">Telephone</label>
                <input type="text" name="tel" id="tel" />
                <label htmlFor="msg">Message</label>
                <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
                <div className="btn">
                  <button type="cancel" onClick={cancel}>
                    Annuler
                  </button>
                  <button type="submit" id="submit">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
