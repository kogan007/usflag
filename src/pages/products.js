import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout';


export default function Home({ data: {allBigCommerceProducts} }) {
    
    return (
      <Layout>
          {
              allBigCommerceProducts.nodes.map((product) => 
                {
                    return (
                        <div key={product.name}>
                        <Link to={`/products${product.custom_url.url}`}>
                            {product.name}
                        </Link>
                        </div>
                    )
                }
              )
          }
      </Layout>
    )
  }


  export const query = graphql`
  query {
    allBigCommerceProducts(filter: {is_visible: {eq: true}}) {
      nodes {
        id
        name
        bigcommerce_id
        custom_url {
          url
        }
      }
    }
}
`