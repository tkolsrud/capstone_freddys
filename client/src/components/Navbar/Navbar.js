import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

import { Admin } from '../../recoil/user';
import { useRecoilValue } from 'recoil';

const NavigationBar = () => {
    const isAdmin = useRecoilValue(Admin);
    console.log(isAdmin);

    return (
        <Navbar className="navbar" expand="lg">
            <Link id="brand" href="/guitars" to='/guitars'>Freddy's Rare Guitars</Link>
            <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <div>
                        <Link className="navlink ml-auto" to="/profile">Profile</Link>
                    </div>
                    <div>
                        <Link className="navlink ml-auto" to="/profile/cart">Cart</Link>
                    </div>
                    {isAdmin && (
                        <div>
                            <Link className="navlink ml-auto" to="/guitars/create">Add Guitar</Link>
                        </div>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;