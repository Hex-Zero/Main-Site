import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import ContactForm from "../components/contactForm"
import SocialLink from "../components/socialLinks"
const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />

      <div className="contact">
        <div></div>
        <ContactForm />
        <div className="links">
          <SocialLink />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
