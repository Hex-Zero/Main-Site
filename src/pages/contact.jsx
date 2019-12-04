import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"
import SocialLink from "../components/socialLinks"
const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

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

export default contact
