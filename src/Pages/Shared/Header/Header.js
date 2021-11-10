import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

import logo from '../../../img/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" className='navbar' variant="light">
            <Container>

                <NavLink to='/home' ><img style={{ width: '30%', paddingTop: '20px', paddingBottom: '20px' }} src={logo} alt="" /></NavLink>
                <Navbar.Toggle bg='dark' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        <NavLink className='navlink' activeStyle={{
                            fontWeight: "600",
                            color: "black"
                        }} to='/home'>Dashboard</NavLink>
                        <NavLink className='navlink' to='/home' >Logout</NavLink>
                        <NavLink className='navlink' to='/home' >Login</NavLink>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar >
    );
};

export default Header;