import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_15yxi8t",   // your Service ID
        "template_b70kh0a",  // your Template ID
        form.current,
        "-B9oSkBkYKLWwgjV_"  // your Public Key
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          console.error(error);
        }
      );
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div id="enquire" className="form-section">
      <form ref={form} onSubmit={sendEmail} className="user-form">
        <h2>Enquire Now !</h2>
        <input type="text" name="name" placeholder="Enter your name" required />
        <input type="tel" name="phone" placeholder="Enter your phone number" required />
        <input type="email" name="email" placeholder="Enter your email" required />
        <textarea name="message" placeholder="Enter your message" required />
        <button type="submit">Submit</button>
      </form>

      {status === "success" && <p className="success-msg">✅ Thank you! Your message has been sent.</p>}
      {status === "error" && <p className="error-msg">❌ Oops! Something went wrong. Please try again.</p>}
    </div>
  );
}

export default ContactForm;
