import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import SimpleSlider from '../components/Carousel';
import Featured from '../components/products/featured';
import HomeCategories from '../components/HomeCategories';

//images 
import shipping from '../images/site-service-bg-cover/shipping.png'
import madeUSA from '../images/site-service-bg-cover/made-in-usa.png'
import finePrice from '../images/site-service-bg-cover/fine-price.png'
import supplier from '../images/site-service-bg-cover/supplier.png'




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <>

    <div className="row">
		  <div className="main-banner">
      <SimpleSlider />
      </div>
    </div>


    <div className="row">
          <div className="site-product-services">
            <div className="custom-container">
              <div className="product-service-container">
                <ul className="service-ul">
                  <li><a><img src={shipping} className="img-fluid" alt="" /></a></li>
                  <li><a><img src={madeUSA} className="img-fluid" alt="" /></a></li>
                  <li><a><img src={finePrice} className="img-fluid" alt="" /></a></li>
                  <li><a><img src={supplier} className="img-fluid" alt="" /></a></li>
                </ul>	
              </div>
            </div>	
          </div>
        </div>

    <div className="row">
      <HomeCategories/>
    </div>


      <div className="row">
        <Featured/>
      </div>
    
           

    </>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
