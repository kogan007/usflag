import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import {Link} from 'gatsby';
import SEO from "../components/seo"


export default ({
    data: {
        bigcommerceData: {
            site: {
                route: {
                    node: {
                        description,
                        name,
                        products 
                    }
                }
            }
        }
    }
}) => {
    return (
        <Layout>
            <h2>{name}</h2>
            <div className="category-description" dangerouslySetInnerHTML={{ __html: description }}></div>
        <div>
        {
                products.length ? 
                    products.map((product) => (
                        <div key={product.bigcommerce_id}>
                            <Link to={`/products${product.custom_url.url}`}><span>{product.name}</span></Link>
                        </div>

                    ))
                :
                (
                    <div>
                        No products found
                    </div>
                )
            }
        </div>
        </Layout>
    )
}


export const query = graphql`
query ($pathName: String!) {
    bigcommerceData {
      site {
        route(path: $pathName) {
          node {
            id
            ... on BCGraphQl_Category {
              name
              entityId
              description
              products {
                edges {
                  node {
                    name
                    defaultImage {
                      url(width: 1200)
                    }
                    brand {
                      name
                      defaultImage {
                        url(width: 200)
                      }
                    }
                    prices {
                      price {
                        value
                        currencyCode
                      }
                      priceRange {
                        min {
                          value
                        	currencyCode
                        }
                        max {
                          value
                        	currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }
  
`;  