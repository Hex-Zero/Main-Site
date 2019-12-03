import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-name">
      <h1>Hex-Zero</h1>
      <h2 className="name-aka">
        <span className="aka">aka:</span> Mantas Brasiunas
      </h2>
    </div>
  </Layout>
)

export default IndexPage
