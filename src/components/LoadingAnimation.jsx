import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LodaingAnimation = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/loading.svg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className="gatsby-astronaut"
    />
  )
}

export default LodaingAnimation
