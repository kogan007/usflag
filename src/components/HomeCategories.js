import React from 'react';

import cat1 from '../images/category-banner/01.jpg';
import cat2 from '../images/category-banner/02.jpg';
import cat3 from '../images/category-banner/03.jpg';
import cat4 from '../images/category-banner/04.jpg';
import cat5 from '../images/category-banner/05.jpg';

const HomeCategories = () => (
    
		<div className="custom-container">
			<div className="flag-category-bg-cover">
				<div className="left-banner-category">
					<a className="banner-atag">
						<span>Military<br/>
						Flags</span>
						<img src={cat1} className="img-fluid" alt="" />
					</a>
					<a className="banner-atag">
						<span>US State Flags
						<select>
							<option>Alabama</option>
							<option>Alaska</option>
							<option>Arizona</option>
							<option>California</option>
							<option>Florida</option>
							<option>Georgia</option>
							<option>Maryland</option>
						</select>
						</span>
						<img src={cat2} className="img-fluid" alt="" />
					</a>
				</div>
				<div className="right-banner-category">
					<a className="banner-atag">
						<span>Flag Poles</span>
						<img src={cat5} className="img-fluid" alt="" />
					</a>
					<a className="banner-atag">
						<span>Display Cases</span>
						<img src={cat4} className="img-fluid" alt="" />
					</a>
					<a className="banner-atag">
						<span>Historical Flags</span>
						<img src={cat3} className="img-fluid" alt="" />
					</a>
				</div>
			</div>
		</div>
	
)

export default HomeCategories;