import React from 'react';
import {Link} from 'gatsby';

export default function Card({otherProps}) {

    const {name, defaultImage, prices, path} = otherProps;
    const {url} = defaultImage
	const {price: {value}} = prices;

    return (
        <div>
            <div className="item">
				<Link to={`/products${path}`} className="product-width-box">
				    <div className="each-product-white-box">
						<div className="each-product-img-section">
							<img src={url} className="img-fluid" alt="" />
						</div>
						
                        <div className="product-heading">
						    <b>{name}</b>
							<span>x</span>
						</div>
					</div>
					    <hr className="producthr" />
					
                        <div className="price-listing">
						    <big>${value}</big>
					    </div>
                        
				</Link>
			</div>
        </div>
    )
}