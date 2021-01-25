import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Card from './card';

export default function Featured() {
    const data = useStaticQuery(graphql`
    {
      bigcommerceData {
        site {
          featuredProducts {
            edges {
              node {
                id
                name
                entityId
                defaultImage {
                  url(width: 300)
                }
                path
                prices {
                  price {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }

    `)
    
    const featuredProducts = data.bigcommerceData.site.featuredProducts.edges;

    
    return (
        
		<div className="featured-bg-product-cover">
			<h1 className="heading-title"><span><small>Featured Products</small></span></h1>
			<div className="custom-container">
                <div className="temp-featured">
                {
                    featuredProducts.map(({node}) => (
                        <Card key={node.id} otherProps={node}/>
                    ))
                }
                </div>
            </div>
        </div>
    )
    }

