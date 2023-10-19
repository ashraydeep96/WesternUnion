import React from "react";
import './Navbar.css'
import profile from "../../assets/profile.png";
import logo from "../../assets/logo.wu.sm.svg";
import LanguageIcon from '@mui/icons-material/Language';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">

        {/* Logo */}
        <Link to="/" style={{ marginTop:'10px', color: 'white', textDecoration: 'none' }}>
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{height:'34px', width:'42px'}} />
          <b>WesternUnion</b>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          {/* Left Icons */}
          <Nav className="ml-auto d-flex align-items-center">
          <div className="language-change">
            <LanguageIcon/>
            <select name="language" id="language">
              <option value="en">EN</option>
              <option value="spa">SPA</option>
              <option value="hi">HI</option>
            </select>
          </div>
            <div style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
              <img src={profile} alt="Profile" style={{ height: '32px', width: '32px', borderRadius: '50%' }} /><span style={{ marginLeft: '2px', color: 'white' }}>Ale</span>
            </div>
            <Link to="/login" style={{ marginLeft: '10px', color: 'yellow', textDecoration: 'none', marginRight: '20px' }}>Logout</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;