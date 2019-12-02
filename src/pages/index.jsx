import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <AniLink paintDrip hex="#ddabdd" to="contact">
      Go to Page 4
    </AniLink>
  </Layout>
)

export default IndexPage
