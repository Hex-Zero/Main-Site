import React from "react"
import Layout from "../components/layout"
import ImageLink400 from "../images/imageLink"

const portfolio = () => {
  const info = [
    {
      imageName: "mi",
      title: "Makeup Island",
      description: "lotnsraeitnsreiatn",
      url: "https://makeupisland.netlify.com",
    },
    {
      imageName: "vsp",
      title: "Vita Smile Photography",
      description: "lotnsraeitnsreiatn",
      url: "https://makeupisland.netlify.com",
    },
    {
      imageName: "rav",
      title: "Ravenouse",
      description: "lotnsraeitnsreiatn",
      url: "https://makeupisland.netlify.com",
    },
    {
      imageName: "bud",
      title: "Budget Calculator",
      description: "lotnsraeitnsreiatn",
      url: "https://makeupisland.netlify.com",
    },
  ]
  return (
    <Layout>
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
