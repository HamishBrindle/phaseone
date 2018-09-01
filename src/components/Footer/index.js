import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/Twitter.png'
import YouTube from '../../assets/YouTube.png'
import SocialIcon from '../../components/SocialIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {

    render() {

        const usefulLinks = [
            { path: "/", name: "Home" },
            { path: "/projects", name: "Projects" },
            { path: "http://truenorth.studio/", name: "True North" }
        ]

        const contactInfo = [
            { icon: faEnvelope, name: "Email", info: "info@phaseonemk2.com" },
            { icon: faPhone, name: "Phone", info: "(604) 922-9999" },
            { icon: faMapPin, name: "Address", info: "2837 Fake Street" }
        ]

        const socialIcons = [
            { name: "Facebook", link: "#", image: Facebook },
            { name: "Instagram", link: "#", image: Instagram },
            { name: "Twitter", link: "#", image: Twitter },
            { name: "YouTube", link: "#", image: YouTube },
        ]

        const year = new Date().getFullYear()

        return (
            <div className="footer">
                <div className="section">
                    <div className="section-item">
                        <h3>Phase One</h3>
                        <p>A Vancouver based marketing firm specializing in property development and branding. If you have a new development in the works, we can help.</p>
                    </div>
                    <div className="section-item">
                        <h3>Useful Links</h3>
                        <ul>
                            {usefulLinks.map((link) => 
                                <li key={link.name}>
                                    <Link to={link.path}>{link.name}</Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="section-item">
                        <h3>Contact</h3>
                        <ul>
                            {contactInfo.map((item) => 
                                <li key={item.name} className="contact-item">
                                    <p><strong><FontAwesomeIcon icon={item.icon} /></strong> {item.info}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <hr/>
                {/* <div className="section">
                    <div className="newsletter underline-dark">
                        <label forhtml="newsletterInput">NEWSLETTER</label>
                        <input type="email" className="form-control" id="newsletterInput" placeholder="Email" />
                        <button className="button-light">sign-up</button>
                    </div>
                </div>
                <hr/> */}
                <div className="section">
                    <div className="social">
                        {socialIcons.map((icon) => 
                            <SocialIcon image={icon.image} name={icon.name} link={icon.link} />
                        )}
                    </div>
                </div>
                <hr/>
                <div className="section copyright">
                    <div>Phase One Marketing &copy;{year}</div>
                </div>
            </div>
        )
    }
}
