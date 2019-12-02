module.exports = {
  siteMetadata: {
    title: `Hex-Zero`,
    description: `Main`,
    author: `Hex Zero`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        start_url: `/`,
        icon: `src/images/Main-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
