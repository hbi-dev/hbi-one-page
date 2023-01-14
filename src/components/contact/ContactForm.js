import React, { useState } from "react";
import "./contact.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="phone">Telephone:</label>
        <input type="text" id="phone" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" cols="30" rows="10" required />
      </div>
      <button className="btn" type="submit">
        {status}
      </button>
    </form>
  );
};

export default ContactForm;

//contact : https://w3collective.com/react-contact-form/
//https://nodemailer.com/smtp/oauth2/
//https://medium.com/@mfofana/envoi-demail-via-nodemailer-en-utilisant-gmail-avec-xoauth2-6b80328d5593
//https://stackoverflow.com/questions/19877246/nodemailer-with-gmail-and-nodejs => token XOAuth2 token
