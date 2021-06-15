import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => (
  <header>
    <nav>
      <AniLink
        duration={1}
        activeClassName="active"
        paintDrip
        hex="#852766"
        to="/"
      >
        Home
      </AniLink>
      <AniLink
        duration={1}
        activeClassName="active"
        paintDrip
        hex="#852766"
        to="/portfolio"
      >
        Portfolio
      </AniLink>
      <AniLink
        duration={1}
        activeClassName="active"
        paintDrip
        hex="#852766"
        to="/contact"
      >
        Contact
      </AniLink>
    </nav>
  </header>
)

export default Header
