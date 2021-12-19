import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../../img/logo.png'
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/material';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="" className='navbar' variant="light" sticky='top'>
            <Container>

                <NavLink to='/home' ><img style={{ width: '30%', paddingTop: '20px', paddingBottom: '20px' }} src={logo} alt="" /></NavLink>
                <Navbar.Toggle bg='dark' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        {user?.email ? <Box>
                            <NavLink className='navlink' to='/home' activeStyle={{
                                fontWeight: "600",
                                color: "black"
                            }}>Home</NavLink>
                            <NavLink className='navlink' to='/allServices' activeStyle={{
                                fontWeight: "600",
                                color: "black"
                            }}>Store</NavLink>
                            {/* <Link className='navlink' to='#reviews' smooth activeStyle={{
                                fontWeight: "600",
                                color: "black"
                            }}>Reviews</Link>
                            <Link className='navlink' to='#support' activeStyle={{
                                fontWeight: "600",
                                color: "black"
                            }}>Support</Link> */}
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
                            <div>
                                <NavLink className='navlink' to='/home' activeStyle={{
                                    fontWeight: "600",
                                    color: "black"
                                }}>Home</NavLink>
                                <NavLink className='navlink' to='/allServices' activeStyle={{
                                    fontWeight: "600",
                                    color: "black"
                                }}>Store</NavLink>
                                <Link className='navlink' to='#reviews' smooth activeStyle={{
                                    fontWeight: "600",
                                    color: "black"
                                }}>Reviews</Link>
                                <Link className='navlink' to='#support' activeStyle={{
                                    fontWeight: "600",
                                    color: "black"
                                }}>Support</Link>
                                <NavLink className='navlink' to='/login' activeStyle={{
                                    fontWeight: "600",
                                    color: "black"
                                }}>Login</NavLink>
                            </div>
                        }

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar >
    );
};

export default Header;