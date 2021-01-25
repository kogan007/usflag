const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const axios = require('axios');


exports.sourceNodes = async ({actions: {createNode}, createNodeId, createContentDigest}) => {


  const pageConfig = {
    method: 'get',
    url: `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v2/pages`,
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'X-Auth-Token': process.env.ACCESS_TOKEN
    },
  };

  const res2 = await axios(pageConfig);

  res2.data.forEach((page) => createNode({
    name: page.name,
    body: page.body,
    url: page.url,
    id: createNodeId(page.name),
    bcID: page.id,
    internal: {
      type: 'BCPage',
      contentDigest: createContentDigest(page)
    }
  }))
  return;
};




exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    {
      allBigCommerceTestNode(filter: {is_visible: {eq: true}}) {
        nodes {
          name
          id
          original_id
          custom_url {
            url
          }
        }
      }
      allBcPage {
        nodes {
          name
          body
          url
          bcID
        }
      }
      bigcommerceData {
        site {
          categoryTree {
            name
            path
            entityId
            children {
              name
              path
              entityId
              children {
                name
                path
                entityId
              }
            }
          }
          featuredProducts {
            edges {
              node {
                id
                name
                entityId
                path
              }
            }
          }
        }
      }

    }
    
    
    
  `);
    const products = result.data.allBigCommerceTestNode.nodes;
    const categories = result.data.bigcommerceData.site.categoryTree; 
    const pages = result.data.allBcPage.nodes;
    


    

    pages.forEach((customPage) => {
      createPage({
        path: `${customPage.url}`,
        component: path.resolve(`src/templates/page.js`),
        context: {
          page: customPage.bcID
        }
      });
    })

    categories.forEach((category) => {
      createPage({
        path: `${category.path}`,
        component: path.resolve(`src/templates/category-page.js`),
        context: {
          category: category.entityId,
          pathName: `${category.path}`
        }
      });
    });
    
    categories.forEach((category) => category.children.forEach((child) => {
      
      createPage({
        path: `${child.path}`,
        component: path.resolve(`src/templates/category-page.js`),
        context: {
          category: child.entityId,
          pathName: `${child.path}`
        }
      });
    }))
    


    products.forEach(({ custom_url, original_id }) => {
        createPage({
          path: `/products${custom_url.url}`,
          component: path.resolve(`src/templates/product-page.js`),
          context: {
            productId: original_id
          }
        });
      });

}





exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode });
      createNodeField({
        name: `slug`,
        node,
        value
      });
    }
  };