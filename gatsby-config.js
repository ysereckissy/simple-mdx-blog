/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gastby-source-filesystem`,
      name: `pages`,
      options: `${__dirname}/src/pages`
    },
    {
      resolve: `gastby-source-filesystem`,
      name: `posts`,
      options: `${__dirname}/src/posts`
    },
    {
      resolve: `gastby-source-filesystem`,
      name: `images`,
      options: `${__dirname}/src/images`
    },
  ],
}
