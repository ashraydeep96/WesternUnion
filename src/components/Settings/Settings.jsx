import React from 'react'
import './Settings.scss'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div>
      {/* Path */}
      <div className="path">
      <Link to="/WesternUnion" style={{ marginLeft: '10px', marginRight:'1px', color: 'blue', textDecoration: 'none', textSizeAdjust:'auto' }}>Home</Link>
      <span><ChevronRightOutlinedIcon fontSize="small" /></span>
      <Link className="onLink" style={{marginLeft:'1px', color: 'black', textDecoration: 'none', textSizeAdjust:'auto' }}>Settings</Link>
      </div>
      <div className="heading">
        <h3>Settings</h3>
      </div>

      {/* cards */}
      <div class="cards">
        <Link class="card-1" to="/reports">
          <SettingsOutlinedIcon sx={{ fontSize: 70 }} />
          <span>Stastical Groups</span>
          <div class="info-container">
            <InfoOutlinedIcon />
          </div>
        </Link>
        <Link class="card-2" to="/settings/search">
          <SearchOutlinedIcon sx={{ fontSize: 70 }} />
          <span>Transaction Search</span>
          <div class="info-container">
            <InfoOutlinedIcon />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Settings
