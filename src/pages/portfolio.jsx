import React from "react"
import Layout from "../components/layout"
import ImageLink400 from "../images/imageLink"
import SEO from "../components/seo"

const portfolio = () => {
  const info = [
    {
      imageName: "mi",
      title: "Makeup Island",
      description:
        "Online Makeup store. Fully functional E-commerce application build with Gatsby for maximised SEO.",
      url: "https://makeupisland.netlify.com",
    },
    {
      imageName: "vsp",
      title: "Vita Smile Photography",
      description:
        "Landing page for a local photography business. Build with React and Bootstrap. Currently rebuilding...",
      url: "https://vita-smile-photography.uk/",
    },
    {
      imageName: "rav",
      title: "Ravenouse",
      description:
        "Restaurant finder application. Pulling information of a Yelp API. Build for one of the lessons at Codecademy.com.",
      url: "https://hex-zero.github.io/React-Codecademy/",
    },
    {
      imageName: "bud",
      title: "Budget Calculator",
      description:
        "React hocks in action with a small budget calculator application.",
      url: "https://hex-zero.github.io/React-Hook-App/",
    },
  ]
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="portfolio">
        {info.map(item => {
          return (
            <div key={item.imageName} className="link-container">
              <a href={item.url}>
                <div className="links">
                  <ImageLink400
                    imageName={item.imageName}
                    className="image-link400"
                  />
                  <div className="link-text">
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default portfolio
