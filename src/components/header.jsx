import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => (
  <header>
    <nav>
      <AniLink paintDrip hex="#ddabdd" to="/">
        Main
      </AniLink>
      <AniLink paintDrip hex="#ddabdd" to="contact">
        Contact
      </AniLink>
    </nav>
  </header>
)

export default Header
