import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from "../components/seo"

export default ({
    data: {
      bigcommerceData: {
        site: {
          product: {
            name,
            description,
            images,
            prices,
            sku,
            weight
          }
        }
      }
    }
  }) => {
    const [selectedImage, updateSelectedImage] = useState(
      images.edges.length && images.edges[0].node.url
    );

    return (
      <Layout>
        <SEO title={name} />
        <div className="content">
          <div className="has-text-centered margin-top-0">
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow:
                  '0.5rem 0 0 rgba(0, 0, 0, 1), -0.5rem 0 0 rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                color: 'white',
                padding: '1rem'
              }}>
              {name}
            </h1>
          </div>
          <section className="section">
            <div className="bc-product-single">
              <section className="bc-product-single__top">
                <div className="bc-product__gallery">
                  <img
                    src={
                      (selectedImage && selectedImage) ||
                      '/img/default-bc-product.png'
                    }
                    alt="Main"
                    style={{ objectFit: 'contain' }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      cursor: 'pointer',
                      justifyContent: 'center'
                    }}>
                    {images.edges.length &&
                      images.edges.map(({node}) => (
                        <img
                          height="100px"
                          width="100px"
                          src={node.url}
                          alt="Thumb"
                          key={JSON.stringify(node)}
                          onClick={() => updateSelectedImage(node.url)}
                        />
                      ))}
                  </div>
                </div>
  
                <div className="bc-product-single__meta">
                  <h1 className="bc-product__title">{name}</h1>
  

  
                  <span className="bc-product__sku">
                    <span className="bc-product-single__meta-label">SKU:</span>{' '}
                    {sku}
                  </span>
  

                </div>
              </section>
              <section className="bc-single-product__description">
                <h4 className="bc-single-product__section-title">
                  Product Description
                </h4>
                <div
                  className="bc-product__description"
                  dangerouslySetInnerHTML={{ __html: description }}></div>
              </section>
              <section className="bc-single-product__specifications">
                <h4 className="bc-single-product__section-title">
                  Specifications
                </h4>
                <ul className="bc-product__spec-list">
                  <li className="bc-product__spec">
                    <span className="bc-product__spec-title">Weight:</span>{' '}
                    <span className="bc-product__spec-value">{weight.value} oz</span>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>

      </Layout>
    );
  };
  
  export const query = graphql`
  query($productId: Int!) {
    bigcommerceData {
      site {
        product(entityId: $productId) {
          name
          images {
            edges {
              node {
                url(width: 300)
              }
            }
          }
          sku
          prices {
            price {
              value
            }
          }
          description
          weight {
            value
          }
        }
      }
    }
  }
  `;