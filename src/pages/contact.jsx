import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import ContactForm from "../components/contactForm"
const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />

      <div className="contact">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Contact
