import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instaicon.png'
import twitter_icon from '../Assets/twittericon.png'
import whatsapp_icon from '../Assets/whtspicon.png'
const Footer=()=>{
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={ instagram_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={ twitter_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={ whatsapp_icon} alt=""/>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyrright @2024 - All rights reserved</p>
            </div>
        </div>

    
    )
}
export default Footer