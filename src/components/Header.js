
import PropTypes from "prop-types"
import React from "react"
import Image from "./Image"
import headerLogo from '../images/header-logo.png';
import cartIcon from '../images/site-shopping-cart.png';
import Nav from './nav';
import {Link} from 'gatsby'

const Header = ({ siteTitle }) => (
	<>
  <div className="row">
		<div className="top-bg-cover">
			<div className="custom-container">
				<div className="top-bar-container">
          <div className="left-header">
					<Link to="/" className="header-logo">
						<img src={headerLogo} className="img-fluid" alt=""/>
					</Link>
          </div>
					<div className="top-bar-right-sidebar">
						<div className="short-link-red-bar">
							<ul className="top-bar-links">
								<li><a href="tel:1-888-932-3524"><b>1-888-932-3524</b></a></li>
								<li><a href="https://google.com">Our History</a></li>
								<li><a href="https://google.com">Contact Us</a></li>
								<li><a rel="noreferrer" href="https://google.com">My Account <img src={cartIcon} className="img-fluid shopping-cart-img" alt=""/></a></li>
							</ul>	
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Search keyword or ID"/>
							<a rel="noreferrer" href="https://google.com" className="search-icon"><i className="fa fa-search"></i></a>
						</div>
					</div>	
				</div>
			</div>	
		</div>
	</div>

	<Nav/>
	</>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
