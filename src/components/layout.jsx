import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../style/index.scss"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout-container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="background-simbol">{"</>"}</div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
