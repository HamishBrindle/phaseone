import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class Footer extends Component {


    render() {
        const year = new Date().getFullYear()
        return (
            <div className="footer">
                <div className="section">
                    <div className="section-item">
                        <h3>Footer Content</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ab excepturi eos facere corrupti quae id veniam aliquam repellendus animi aspernatur nulla aperiam quas, adipisci velit libero! Veniam, dolore autem.</p>
                    </div>
                    <div className="section-item">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>
                                <Link to="/">Link1</Link>
                            </li>
                            <li>
                                <Link to="/">Link2</Link>
                            </li>
                            <li>
                                <Link to="/">Link3</Link>
                            </li>
                            <li>
                                <Link to="/">Link4</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="section-item">
                        <h3>Legal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique libero dolores cupiditate. Ex reiciendis exercitationem corporis esse fugit quasi officiis dolor quo sed minus aut quis impedit, maiores assumenda.</p>
                    </div>
                    <div className="section-item">
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                <Link to="/">Email</Link>
                            </li>
                            <li>
                                <Link to="/">Address</Link>
                            </li>
                            <li>
                                <Link to="/">Phone</Link>
                            </li>
                            <li>
                                <Link to="/">Fax</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="section">
                    <div className="newsletter underline-dark">
                        <label forHtml="newsletterInput">NEWSLETTER</label>
                        <input type="email" className="form-control" id="newsletterInput" placeholder="Email" />
                        <button className="button-light">sign-up</button>
                    </div>
                </div>
                <hr/>
                <div className="section">
                    <div className="social">
                        {/* <SocialIcon></SocialIcon>
                        <SocialIcon></SocialIcon>
                        <SocialIcon></SocialIcon>
                        <SocialIcon></SocialIcon> */}
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
