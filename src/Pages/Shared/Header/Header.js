import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

import logo from '../../../img/logo.png'
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/material';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="" className='navbar' variant="light">
            <Container>

                <NavLink to='/home' ><img style={{ width: '30%', paddingTop: '20px', paddingBottom: '20px' }} src={logo} alt="" /></NavLink>
                <Navbar.Toggle bg='dark' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        {user?.email ? <Box>
                            <NavLink className='navlink' activeStyle={{
                                fontWeight: "600",
                                color: "black"
                            }} to='/dashboard'>Dashboard</NavLink>
                            <NavLink className='navlink' activeStyle={{
                                fontWeight: "600",
                                color: "black"
                            }} to='/profile'>{user?.displayName}</NavLink>
                            <NavLink className='navlink' to='/home' onClick={logOut}>Logout</NavLink>
                        </Box>
                            :
                            <NavLink className='navlink' to='/login' activeStyle={{
                                fontWeight: "600",
                                color: "black"
                            }}>Login</NavLink>
                        }

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar >
    );
};

export default Header;