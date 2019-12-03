import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AniLink
      duration={1}
      activeClassName="active"
      paintDrip
      hex="#852766"
      to="contact"
      className=""
    >
      <div className="index-name">
        <h1 className="text-spark">Hex-Zero</h1>
        <h2 className="name-aka">
          <span className="aka">aka:</span> Mantas Brasiunas
        </h2>
      </div>
    </AniLink>

    <AniLink
      duration={1}
      activeClassName="active"
      paintDrip
      hex="#852766"
      to="portfolio"
      className="my-work-button text-spark"
    >
      See My Work
    </AniLink>
  </Layout>
)

export default IndexPage
