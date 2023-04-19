import React, { useEffect, useState } from "react";
import emailjs, { init } from "emailjs-com";
init("user_7TRpE1ETxxdlRHzpPATZ1");
import { CSSTransition } from "react-transition-group";
import "./contact.scss";

const Contact = ({ reference, scrolled }) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [subjectError, setSubjectError] = useState("");
  let [messageError, setMessageError] = useState("");

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
        let animation = document.getElementById("contact-form-sent-ani");
        animation.classList.add("sent-ani");

        setTimeout(() => {
          setFormCounter(1);
          setMessageError("");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          animation.classList.remove("sent-ani");
        }, 2000);
      })
      .catch(function (error) {
        alert("Oops... " + JSON.stringify(error));
      });
  }

  function changeFormCounter(num) {
    if (num < 5 && num > 0) {
      if (num === 2) {
        if (name.length > 1) {
          setFormCounter(num);
          setNameError("");
        } else {
          setNameError("Please provide your name");
          setName("");
        }
      }

      if (num === 3) {
        if (email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
          setFormCounter(num);
          setEmailError("");
        } else {
          setEmailError("Please provide your email");
          setEmail("");
        }
      }
      if (num === 4) {
        if (subject.length > 5) {
          setFormCounter(num);
          setSubjectError("");
        } else {
          setSubjectError("Please provide your subject");
          setSubject("");
        }
      }
    } else if (num > 4) {
      if (message.length > 5) {
        sendEmail();
      } else {
        setMessageError("Please provide your message");
        setMessage("");
        //txtbox.SelectionLength = 0; to bring ticker back to show error
      }
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
              {window.innerWidth > 750 ? (
                <input
                  autoFocus
                  onKeyPress={nextInputOnEnter}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  key={formCounter + 1}
                  className="contact-form contact-form-name"
                  type="text"
                  placeholder={nameError}
                />
              ) : (
                <input
                  onKeyPress={nextInputOnEnter}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  key={formCounter + 1}
                  className="contact-form contact-form-name"
                  type="text"
                  placeholder={nameError}
                />
              )}
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
                placeholder={emailError}
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
            placeholder={subjectError}
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
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            key={formCounter + 1}
            className="contact-form contact-form-message"
            type="text"
            placeholder={messageError}
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
            <div id="contact-email-text">matrix@palivion.mailer.me</div>
          </div>
          <div id="contact-phone">
            <div id="contact-phone-title">Phone</div>
            <div id="contact-phone-text">+1 401 536 3906</div>
          </div>
        </div>
        <div id="contact-form-container">
          {showActiveInput()}
          {formCounter === 4 ? (
            <img onClick={() => changeFormCounter(formCounter + 1)} id="contact-form-arrow" src="/assets/arrow-right-blue.svg" />
          ) : (
            <img onClick={() => changeFormCounter(formCounter + 1)} id="contact-form-arrow" src="/assets/arrow-right.svg" />
          )}

          <div id="contact-form-counter">{formCounter + "/4"}</div>
        </div>
      </section>
      <div id="contact-form-sent-ani">SENT</div>
    </div>
  );
};
export default Contact;
