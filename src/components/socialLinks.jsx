import React, { useState } from "react"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
const SocialLink = () => {
  const [Icons] = useState([
    <FaFacebookSquare />,
    <FaInstagram />,
    <FaTwitter />,
    <FaLinkedin />,
    <FaGithubSquare />,
  ])
  const [Id] = useState([
    "Facebook",
    "Instagram",
    "Twitter",
    "Linkedin",
    "GitHub",
  ])
  const [Links] = useState([
    "https://www.facebook.com/HexZer0",
    "https://www.instagram.com/hexzer0/",
    "https://twitter.com/Hex_Zero_",
    "https://www.linkedin.com/in/mantas-brasiunas/",
    "https://github.com/Hex-Zero",
  ])

  return (
    <React.Fragment>
      <div className="social">
        {Icons.map((icon, index) => (
          <a
            className="link"
            id={Id[index]}
            key={Id[index]}
            href={Links[index]}
            target="__blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
      <svg width="0" height="0">
        <radialGradient id="instagramSvg" r="150%" cx="30%" cy="107%">
          <stop stopColor="#fdf497" offset="0" />
          <stop stopColor="#fdf497" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#285AEB" offset="0.9" />
        </radialGradient>
      </svg>
      <svg width="0" height="0">
        <radialGradient id="instagramSvgHover" r="150%" cx="30%" cy="107%">
          <stop stopColor="#e1d989" offset="0" />
          <stop stopColor="#e1d989" offset="0.05" />
          <stop stopColor="#ce483b" offset="0.45" />
          <stop stopColor="#c42192" offset="0.6" />
          <stop stopColor="#214dce" offset="0.9" />
        </radialGradient>
      </svg>
    </React.Fragment>
  )
}
export default SocialLink
