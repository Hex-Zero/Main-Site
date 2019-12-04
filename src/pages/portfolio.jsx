import React from "react"
import Layout from "../components/layout"
import ImageLink400 from "../images/imageLink"

const portfolio = () => {
  const info = [
    { imageName: "mi" },
    { imageName: "mi" },
    { imageName: "mi" },
    { imageName: "mi" },
  ]
  return (
    <Layout>
      <div className="portfolio">
        {info.map(item => {
          return (
            <div className="link-container">
              <div className="links">
                <ImageLink400
                  imageName={item.imageName}
                  className="image-link400"
                />
                <h1 className="link-text">
                  lotnsraeitnsreiatn ser natei asrnetoi nsraei thrsei hteisr
                  nteisr niers
                </h1>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default portfolio
