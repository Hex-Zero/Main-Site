import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SocialLink from "../components/socialLinks"

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
    <div className="contact">
      <div className="links">
        <SocialLink />
      </div>
    </div>
  </header>
)

export default Header
