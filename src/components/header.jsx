import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => (
  <header>
    <nav>
      <AniLink
        duration={1}
        activeClassName="active"
        paintDrip
        hex="#ddabdd"
        to="/"
      >
        Home
      </AniLink>
      <AniLink
        duration={1}
        activeClassName="active"
        paintDrip
        hex="#ddabdd"
        to="portfolio"
      >
        Portfolio
      </AniLink>
      <AniLink
        duration={1}
        activeClassName="active"
        paintDrip
        hex="#ddabdd"
        to="contact"
      >
        Contact
      </AniLink>
    </nav>
  </header>
)

export default Header
