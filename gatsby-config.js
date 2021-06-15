module.exports = {
  siteMetadata: {
    title: `Hex-Zero`,
    description: `Main`,
    author: `Hex Zero`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hex Zero`,
        short_name: `Main`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        start_url: `/`,
        icon: `src/images/Main-icon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
