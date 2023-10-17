import React, { useState } from 'react'
import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkIndex) => {
    setActiveLink(linkIndex);
  };
  return (
      <div className="vertical-navbar">
        <div className="top-content">
        <Link className={`home ${activeLink === 1 ? 'active' : ''}`} to="/WesternUnion" onClick={() => handleLinkClick(1)}>
          <HomeOutlinedIcon />Home
        </Link>
        <Link className={`home ${activeLink === 2 ? 'active' : ''}`} to="/userManagement" onClick={() => handleLinkClick(2)}>
          <GroupOutlinedIcon />User Mgmnt
        </Link>
        <Link className={`home ${activeLink === 3 ? 'active' : ''}`} to="/reports" onClick={() => handleLinkClick(3)}>
          <PollOutlinedIcon />Reports
        </Link>
        <Link className={`home ${activeLink === 4 ? 'active' : ''}`} to="/settings" onClick={() => handleLinkClick(4)}>
          <SettingsOutlinedIcon />Settings
        </Link>
        </div>
      </div>
  )
}

export default Sidebar
