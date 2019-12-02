import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"
const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Hi people</h1>
      <AniLink paintDrip to="/">
        Go to Page 4
      </AniLink>
    </Layout>
  )
}

export default contact
