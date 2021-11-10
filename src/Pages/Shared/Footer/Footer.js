import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="quick-links">
                    <ul>
                        <h4>Quick Links</h4>
                        <NavLink to='/'>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/'>
                            <li>Store</li>
                        </NavLink>
                        <NavLink to='/'>
                            <li>Watch</li>
                        </NavLink>
                        <NavLink to='/'>
                            <li>Support</li>
                        </NavLink>
                    </ul>
                </div>

                <div className="account">
                    <ul>
                        <h4>Account</h4>
                        <NavLink to='/'>
                            <li>My Account</li>
                        </NavLink>
                        <NavLink to='/'>
                            <li>Login</li>
                        </NavLink>
                        <NavLink to='/'>
                            <li>Register</li>
                        </NavLink>
                    </ul>
                </div>

                <div className="contact">
                    <ul>
                        <h4>Contact Us</h4>
                        <NavLink to='/'>
                            <li>sales@watchstation.com</li>
                        </NavLink>
                        <NavLink to='/'>
                            <li>+1(844) 313-1290</li>
                        </NavLink>
                    </ul>
                </div>

                <div className="subscribe">

                    <h4>Newsletter</h4>
                    <p>Subscribe to our Newsletter</p>
                    <input id="text" type="email" placeholder="Your Email" /> <br />
                    <input id="btn" type="button" value="SUBSCRIBE" />


                </div>
            </div>

            <div className="last-footer">
                <div className="shop container">
                    <p>More ways to shop: call <NavLink to='/'>+1(844) 313-1290</NavLink> or mail <NavLink to='/'>sales@watchstation.com</NavLink>
                    </p>
                </div>
                <div className="container copyright">
                    <div>
                        <p>Copyright <i className="far fa-copyright"></i> 2022 Watch Station Inc. All Rights Reserverd.</p>
                    </div>

                    <div className="terms">
                        <NavLink to='/'>Privacy Policy</NavLink>
                        <NavLink to='/'>Terms of Use</NavLink>
                        <NavLink to='/'>Sales and Refunds</NavLink>
                        <NavLink to='/'>Legal</NavLink>
                        <NavLink to='/'>Site Map</NavLink>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;