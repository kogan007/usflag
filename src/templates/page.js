import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import {Link} from 'gatsby';
import SEO from "../components/seo"

export default ({
    data: {
        bcPage: {
            body, 
            name
        }
    }
}) => {
    return (
        <Layout>
        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </Layout>
    )
}


export const query = graphql`
    query ($page: Int!) {
        bcPage(bcID: {eq: $page}) {
        body
        name
        url
        }
    }
    

`;  