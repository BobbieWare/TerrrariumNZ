const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `36xlby430dha`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'bkBeKXtIDmkwPiOFvGtf4KJ8bW_vNyeKWoMu8ihAfXs',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   // options: {
    //   //   name: images,
    //   //   path: '${__dirname}/src/assets/images/photoshopped',
    //   //   ignore: '[**/.*]',
    //   // },
    // }
  ],
};
