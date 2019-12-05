import React, { useState } from "react"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
const SocialLink = () => {
  const [info] = useState([
    {
      icon: <FaFacebookSquare />,
      id: "Facebook",
      url: "https://www.facebook.com/HexZer0",
    },
    {
      icon: <FaInstagram />,
      id: "Instagram",
      url: "https://www.instagram.com/hexzer0/",
    },
    {
      icon: <FaTwitter />,
      id: "Twitter",
      url: "https://twitter.com/Hex_Zero_",
    },
    {
      icon: <FaLinkedin />,
      id: "Linkedin",
      url: "https://www.linkedin.com/in/mantas-brasiunas/",
    },
    {
      icon: <FaGithubSquare />,
      id: "GitHub",
      url: "https://github.com/Hex-Zero",
    },
  ])

  return (
    <React.Fragment>
      <div className="social">
        {info.map(item => {
          return (
            <a
              className="link"
              id={item.id}
              key={item.id}
              href={item.url}
              target="__blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
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
