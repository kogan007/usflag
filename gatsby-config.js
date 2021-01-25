require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
<<<<<<< HEAD

=======
const axios = require('axios');

const createJWT = async () => {
  const result = await axios.get("/.netlify/functions/bcJWT")

  return `Bearer ${result.data.token}`;
}
>>>>>>> 61b802b (Test)
module.exports = {
  siteMetadata: {
    title: `U.S Flag Store`,
    description: `U.S Flag Store`,
    author: `@MakDigitalDesign`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-source-bigcommerce`, {
      resolve: 'gatsby-source-bigcommerce',
      options: {
        clientId: process.env.CLIENT_ID, 
        secret: process.env.SECRET,
        accessToken: process.env.ACCESS_TOKEN, 
        storeHash: process.env.STORE_HASH,
        endpoints: {
          BigCommerceProducts: "/catalog/products?page=1&limit=1000&include=images,variants,custom_fields,options,modifiers,videos",
          BigCommerceCategories: "/catalog/categories?page=1&limit=1000",
          CategoryTree: "/catalog/categories/tree",
        },
    }
  },
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "BCGraphQl",
      fieldName: "bigcommerceData",
      url: "https://allied-materials-store-2.mybigcommerce.com/graphql",
      // HTTP headers
      headers: {
        // Learn about environment variables: https://gatsby.dev/env-vars
<<<<<<< HEAD
        Authorization: `Bearer ${process.env.JWT}`,
=======
        Authorization: createJWT()
>>>>>>> 61b802b (Test)
      },
    },
  },
  'gatsby-source-bigcommerce-crosslinked', {
    resolve: 'gatsby-source-bigcommerce-crosslinked',
    options: {
      clientId: process.env.CLIENT_ID, 
      secret: process.env.SECRET,
      accessToken: process.env.ACCESS_TOKEN, 
      storeHash: process.env.STORE_HASH,
      endpoint: '/catalog/products',
      
      nodeName: 'BigCommerceTestNode',

      endpoints: {
        TestBigCommerceProducts: "/catalog/products",
        TestBigCommerceCategories: "/catalog/categories",
      },
  }
  }

  ],
}
