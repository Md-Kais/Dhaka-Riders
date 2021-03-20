import React from 'react';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div style={{ position: 'sticky' }}>

            <Navbar collapseOnSelect expand="lg" bg="" variant="light">

                <Link to="/home" className='logoClass'> Dhaka Riders</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className='linkClass'>Home</Link>
                        <Link to="/destination/bus/search" className='linkClass' >Destination</Link>
                        <Link to="/login" className='linkClass'>
                            {
                                loggedInUser.isSignedIn ? loggedInUser.name  : <p>Login</p>
                            }

                        
                        </Link>

                    </Nav>
                    <Nav>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <p style={{ borderBottom: '1px solid grey' }}></p>
        </div>
    );
};

export default Header;