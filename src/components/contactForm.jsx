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
        <label for="email" className="text-spark">
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Your e-mail address"
        ></input>
        <label for="subject" className="text-spark">
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          placeholder="Subject"
        ></input>
        <label for="message" className="text-spark">
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
