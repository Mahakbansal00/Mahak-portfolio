import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Submitting form data:", data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Web3Forms response:", result);

      if (response.ok) {
        alert("Message sent successfully! ✅");
        e.target.reset();
      } else {
        alert(`Error: ${result.message || "Failed to send message. Please try again."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error: Unable to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Form"}
          </button>
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
