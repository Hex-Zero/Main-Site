import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageLink400 = ({ imageName, className }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "images" }
          extension: { eq: "png" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  `)

  return (
    <div className={className}>
      <Img
        fluid={
          data.allFile.nodes.filter(item => item.name === imageName)[0]
            .childImageSharp.fluid
        }
      />
    </div>
  )
}

export default ImageLink400
