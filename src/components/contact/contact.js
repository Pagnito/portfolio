import React, { useEffect, useState, createRef } from "react";
import emailjs, { init } from "emailjs-com";
init("user_7TRpE1ETxxdlRHzpPATZ1");
import { CSSTransition } from "react-transition-group";
import "./contact.scss";

const Contact = ({ reference, scrolled }) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");
  let [formCounter, setFormCounter] = useState(1);

  function sendEmail() {
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send("service_4y3oj9v", "template_0u1j27d", templateParams)
      .then(function () {
        alert("Your mail is sent!");
      })
      .catch(function (error) {
        alert("Oops... " + JSON.stringify(error));
      });
  }

  function changeFormCounter(num) {
    if (num < 5 && num > 0) {
      setFormCounter(num);
    } else if (num > 4) {
      sendEmail();
    }
  }

  function nextInputOnEnter(e) {
    if (e.which === 13) {
      changeFormCounter(formCounter + 1);
    }
  }
  function showActiveInput() {
    if (formCounter === 1) {
      return (
        <>
          <CSSTransition appear in={formCounter === 1} classNames="contactFormInputAni" unmountOnExit timeout={500}>
            <>
              <div key={formCounter} className="contact-form-title">
                Name
              </div>
              <input
                autoFocus
                onKeyPress={nextInputOnEnter}
                onChange={(e) => setName(e.target.value)}
                value={name}
                key={formCounter + 1}
                className="contact-form contact-form-name"
                type="text"
              />
            </>
          </CSSTransition>
        </>
      );
    } else if (formCounter === 2) {
      return (
        <>
          <CSSTransition appear in={formCounter === 2} classNames="contactFormInputAni" unmountOnExit timeout={500}>
            <>
              <div key={formCounter} className="contact-form-title">
                Email
              </div>
              <input
                autoFocus
                onKeyPress={nextInputOnEnter}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                key={formCounter + 1}
                className="contact-form contact-form-email"
                type="text"
              />
            </>
          </CSSTransition>
        </>
      );
    } else if (formCounter === 3) {
      return (
        <>
          <div key={formCounter} className="contact-form-title">
            Subject
          </div>
          <input
            autoFocus
            onKeyPress={nextInputOnEnter}
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            key={formCounter + 1}
            className="contact-form contact-form-subject"
            type="text"
          />
        </>
      );
    } else if (formCounter === 4) {
      return (
        <>
          <div key={formCounter} className="contact-form-title">
            Message
          </div>
          <textarea
            autoFocus
            onKeyPress={nextInputOnEnter}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            key={formCounter + 1}
            className="contact-form contact-form-message"
            type="text"
          />
        </>
      );
    }
  }

  return (
    <div ref={reference} id="contact-section">
      <section className="contact-swing-door-container">
        <div className="contact-swing-door-left contact-door-one"></div>
        <div className="contact-swing-door-right contact-door-one"></div>
      </section>

      <section id="contact-animation-two">
        <section id="contact-animation-two-inner"></section>
      </section>
      <section id="contact-info-n-form">
        <div id="contact-info">
          <div id="contact-email">
            <div id="contact-email-title">Email</div>
            <div id="contact-email-text">pavelyeganov@gmail.com</div>
          </div>
          <div id="contact-phone">
            <div id="contact-phone-title">Phone</div>
            <div id="contact-phone-text">+1 774-360-2363</div>
          </div>
        </div>
        <div id="contact-form-container">
          {showActiveInput()}
          <img onClick={() => changeFormCounter(formCounter + 1)} id="contact-form-arrow" src="/assets/arrow-right.svg" />
          <div id="contact-form-counter">{formCounter + "/4"}</div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
