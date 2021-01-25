import React, {useState} from 'react';
import { Link } from "gatsby"
import Image from "./Image"
import axios from 'axios';
<<<<<<< HEAD

=======
import { navigate } from "gatsby"
>>>>>>> 61b802b (Test)



const Footer = () => {
	const [email, setEmail] = useState("");

	const handleChange = (event) => {
		setEmail(event.target.value)
	}

	const handleForm = async (event) => {
		event.preventDefault();
<<<<<<< HEAD
		const proxyURL = "https://cors-anywhere.herokuapp.com/";
		const subscribeURL = `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/customers/subscribers`

		await axios.post(proxyURL + subscribeURL, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				"X-Auth-Token": process.env.ACCESS_TOKEN,
				"X-AUTH-CLIENT": process.env.CLIENT_ID
			},
			data: JSON.stringify(
				{
					email
				}
			)
		})
	}
	
=======
		
		try {
			const response = await axios.post("/.netlify/functions/bcSubscribe", {
				email
			});
			const {status} = response;
			navigate(
				"/subscribe/",
				{
					state: {status}
				}
			)
		
			
		
		} catch(e) {
			const {response} = e;
			const {request, status, ...errorObject} = response;
			
			navigate(
				"/subscribe/",
				{
					state: {status}
				}
			)
			
		
		
		}
	}

>>>>>>> 61b802b (Test)
	return (
    <div>
        <div className="row">
            <div className="newsletter-row-bg-cover">
                <div className="custom-container">
                    <div className="newsletter-container">
                        <h3>Sign Up For Newsletter!</h3>
						<form onSubmit={handleForm} >
                        <div className="form-group">
                            <input type="text" onChange={handleChange} className="form-control" value={email} placeholder="Email Address" />
                            <a rel="noreferrer" href="https://google.com" className="subscribe-button">Subscribe</a>
                        </div>
						</form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
		<div className="footer-bg">
			<div className="custom-container">
				<div className="footer-container-flex">
					<div className="left-footer-links-row">
						<div className="each-footer-content">
							<h4>Company Info</h4>
							<ul>
								<li><a href="https://google.com" rel="noreferrer">About Us</a></li>
								<li><a href="https://google.com" rel="noreferrer">Contact Us</a></li>
								<li><a href="https://google.com" rel="noreferrer">Terms & Conditions</a></li>
								<li><a href="https://google.com" rel="noreferrer">Shipping & Returns</a></li>
								<li><a href="https://google.com" rel="noreferrer">Site Map</a></li>
								<li><a href="https://google.com" rel="noreferrer">Category Index</a></li>
								<li><a href="https://google.com" rel="noreferrer">Product Index</a></li>
								<li><a href="https://google.com" rel="noreferrer">Newsletter Sign-Up</a></li>
							</ul>
						</div>
						<div className="each-footer-content">
							<h4>Shop With Us</h4>
							<ul>
								<li><a href="https://google.com" rel="noreferrer">View Cart</a></li>
								<li><a href="https://google.com" rel="noreferrer">My Account</a></li>
								<li><a href="https://google.com" rel="noreferrer">Order Tracking</a></li>
								<li><a href="https://google.com" rel="noreferrer">Flag Flying Holidays</a></li>
								<li><a href="https://google.com" rel="noreferrer">Flag Buying Guide</a></li>
								<li><a href="https://google.com" rel="noreferrer">American Flag History</a></li>
								<li><a href="https://google.com" rel="noreferrer">Folds of Honor Patriot</a></li>
								<li><a href="https://google.com" rel="noreferrer">Golf Day Sponsors</a></li>
							</ul>
						</div>
						<div className="each-footer-content">
							<h4>Customer Services</h4>
							<ul>
								<li><a href="https://google.com" rel="noreferrer">Help</a></li>
								<li><a href="https://google.com" rel="noreferrer">Leave a Review of the Site</a></li>
								<li><a href="https://google.com" rel="noreferrer">U.S. Flag Disposal Locations</a></li>
							</ul>
						</div>
					</div>
					<div className="right-footer-payment-way">
						<ul className="footer-site-logo">
							<li><Link to="/products"><Image filename="footer-logo/site-footer-logo.png" className="img-fluid" alt=""/></Link></li>
							<li><Link to="/products"><Image filename="footer-logo/proud-partner-logo.png" className="img-fluid" alt=""/></Link></li>
                        
						</ul>
						
						<p className="copyrighttext">USFlagStore © 2020 All Rights Reserved. Designed & Developed by <a rel="noreferrer" href="http://www.makdigitaldesign.com" target="_blank">MAK</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
)}

export default Footer;