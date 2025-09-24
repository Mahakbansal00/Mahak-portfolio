import React from "react";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Web3Forms will handle the submission
    alert("Message sent successfully! ✅");
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="b177fba9-7f8d-4115-a378-103b73b7248c" />
          <input type="text" name="name" placeholder="Mahak Bansal" required />
          <input type="email" name="email" placeholder="Mahakbansal58@gmail.com" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Submit Form</button>
        </form>

        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>
            <i className="fas fa-envelope"></i> Mahakbansal58@gmail.com
          </p>
          <p>
            <i className="fas fa-phone"></i> 9354885420
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Gurgaon, India
          </p>
        </div>
      </div>
    </section>
  );
}
