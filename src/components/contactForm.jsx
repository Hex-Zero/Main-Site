import React from "react"

const ContactForm = () => {
  return (
    <div className="form-container">
      <form
        action="/successForm"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="email" className="max-regular-text">
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Your e-mail address"
        ></input>
        <label htmlFor="subject" className="max-regular-text">
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          placeholder="Subject"
        ></input>
        <label htmlFor="message" className="max-regular-text">
          Message
        </label>
        <textarea
          name="message"
          type="text"
          id="message"
          placeholder="Your message"
        ></textarea>
        <input type="submit" value="Send" className="send-button"></input>
      </form>
    </div>
  )
}

export default ContactForm
