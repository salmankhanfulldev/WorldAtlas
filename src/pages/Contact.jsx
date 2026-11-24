import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };
  return (
      <section className="section-contact page-shell">
        <div className="page-heading">
          <span className="eyebrow">Get in touch</span>
          <h2>Contact Us</h2>
          <p>Have a question or feedback? Send us a message.</p>
        </div>
        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              type="text"
              required
              autoComplete="off"
              placeholder="Your name"
              name="username"
              className="form-control"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="off"
              placeholder="you@example.com"
              name="email"
              className="form-control"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="6"
              placeholder="How can we help?"
              required
              autoComplete="off"
            ></textarea>
            <button className="primary-button" type="submit">Send message</button>
            {sent && <p className="form-success" role="status">Thank you! Your message has been received.</p>}
          </form>
        </div>
      </section>
  );
};

export default Contact;
